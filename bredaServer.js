// Import the required modules for the server application.
const express = require('express');  
const mysql = require('mysql');     
const bodyParser = require('body-parser'); 
const path = require('path');        
const app = express();          

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies for HTTP POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to serve static files like HTML, CSS, and JavaScript from the current directory
app.use(express.static(__dirname));

// Setting up a connection to the MySQL database.
const connection = mysql.createConnection({
  host: 'localhost',                 // Database server address.
  user: 'testuser',                  // Database username.
  password: '',                      // Database password (empty in this case).
  database: 'SavvyList'              // Database name.
});

// Establish a connection to the MySQL database.
connection.connect((err) => {
  if (err) throw err;  // 
  console.log('Connected to MySQL Database.');  
});

// Define a route to serve the index.html file when the root of the site is accessed
app.get('/', (req, res) => {
  console.log('GET request received at /');  
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/search', (req, res) => {
  const { product } = req.body;  // Accessing JSON data in the request body

  // SQL query to find distinct products matching the input
  const query = 
  `SELECT DISTINCT ProductName, Size
    FROM Products
    WHERE ProductName LIKE ?
    ORDER BY ProductName, Size`;
    
  // Execute the query against the database
  connection.query(query, [`%${product}%`], (err, results) => {
    if (err) throw err;  // Handle SQL errors.
    res.json(results);  // Send the query results back to the client as JSON.
  });
});


app.post('/product-details', (req, res) => {
  const { productName, size } = req.body;  // Accessing JSON data in the request body.

  // SQL query to fetch the cheapest product matching the name and size
  const query = 'SELECT * FROM Products WHERE ProductName = ? AND Size = ? ORDER BY Price ASC LIMIT 1';

  // Execute the query against the database
  connection.query(query, [productName, size], (err, results) => {
    if (err) throw err;  // Handle SQL errors.
    res.json(results);  // Send the query results back to the client as JSON.
  });
});

// Start the server on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);  // Log the server port for confirmation.
});
