//Using mysql
const mysql = require("mysql2");
require("dotenv").config();

// MySQL - Database 2
const pool = mysql
  .createPool({
    // Details saved in the .env file
    // Add your own details to .env files
    // database is SavvyList
    host: process.env.MYSQL2_HOST,
    user: process.env.MYSQL2_USER,
    password: process.env.MYSQL2_PASSWORD,
    database: process.env.MYSQL2_DATABASE,
  })
  .promise();

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Database has connected successfully");
    await connection.query("Select 1");
    connection.release();
  } catch (error) {
    console.log(`An ${error} has occured`);
  }
}

testConnection();

async function checkLogin(username, password) {
  try {
    const [rows] = await pool.query(
      "SELECT Username FROM Customers WHERE (Username = ?) AND (Password = ?)",
      [username, password]
    );
    return rows.length > 0 && username === rows[0].user_name ? true : false;
  } catch (error) {
    console.log("An error " + error + "has occurred.");
    return false;
  }
}

async function getCustomerID() {
  try {
    const [rows] = await pool.query(
      "SELECT CustomerID AS id FROM customers ORDER BY CustomerID DESC LIMIT 1"
    );

    if (rows.length > 0) {
      return rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log("An error " + error + "has occurred while getting customer ID");
  }
}

async function insertRegistration(
  name,
  username,
  password,
  eircode,
  address,
  email
) {
  try {
    const id = await getCustomerID();
    const customerID = parseInt(id.id) + 1;
    console.log(customerID);
    await pool.query(
      "INSERT INTO customers (CustomerID, Fullname, Username, Email, Password, Address, Eircode) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [customerID, name, username, email, password, address, eircode]
    );
  } catch (error) {
    console.log(
      "An error " + error + " has occurred while inserting registration"
    );
  }
}

async function returnProduct(product) {
  const [rows] = await pool.query(
    "SELECT DISTINCT ProductName, Size FROM Products WHERE ProductName LIKE ? ORDER BY ProductName, Size",
    [product]
  );
  return [rows];
}

async function getProducts(productName, size) {
  const [rows] = await pool.query(
    "SELECT * FROM Products WHERE ProductName = ? AND Size = ? ORDER BY Price ASC LIMIT 1",
    [productName, size]
  );
  return [rows];
}

async function getProductNames() {
  const [rows] = await pool.query("SELECT DISTINCT ProductName FROM products;");
  return rows;
}

async function getSupermarkets() {
  const [rows] = await pool.query(
    "SELECT DISTINCT shop AS supermarket FROM products;"
  );
  return rows;
}

async function getTopProduct(product, shop) {
  const [rows] = await pool.query(
    "SELECT ProductName AS product, Price AS price FROM products WHERE (ProductName = ? ) AND (Shop = ?) LIMIT 1;",
    [product, shop]
  );
  return rows;
}

console.log(getTopProduct());

module.exports = {
  checkLogin,
  insertRegistration,
  returnProduct,
  getProducts,
  getProductNames,
  getSupermarkets,
  getTopProduct,
};
