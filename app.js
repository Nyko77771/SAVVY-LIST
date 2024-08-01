// Importing Express and Path dependancies
const express = require("express");
const path = require("path");

//Connect to mysql
/*
const mysql = require("./database/mysql");
*/

// get dotenv dependancy and load env configurations
require("dotenv").config();

//Express app
const app = express();
//Connect to mongoDB
const mongoDB = require("./database/mongodb");

app.set("view engine", "ejs");

const bodyParser = require("body-parser");
const { title } = require("process");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const port = process.env.PORT || 3000;
//Local Configuration
/*
const localhost = process.env.MYSQL2_HOST;
*/

//Tracking
var basketTracker = [];

// Local Listening
/*
app.listen(port, localhost, (error) => {
  if (error) {
    console.log("An error " + error + "has occured.");
  } else {
    console.log("Server is listening on " + port + ". With host: " + localhost);
  }
});
*/
app.listen(port, (error) => {
  if (error) {
    console.log("An error " + error + "has occured.");
  } else {
    console.log("Server is listening on " + port);
  }
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

//GETS

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.get("/views/index", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.get("/list", (req, res) => {
  res.render("list", { title: "List Page" });
});

app.get("views/list", (req, res) => {
  res.render("list", { title: "List Page" });
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

app.get("/register", (req, res) => {
  res.render("registration", { title: "Registration" });
});

app.get("/registration", (req, res) => {
  res.render("registration", { title: "Registration" });
});

app.get("/checkout", (req, res) => {
  res.render("checkout", { title: "Checkout" });
});

app.get("/checkout-basket", async (req, res) => {
  res.json(basketTracker);
  basketTracker = [];
});

// Getting Product Names
/* MySQL Version */
/*
app.get("/list-product", async (req, res) => {
  const products = await mysql.getProductNames();
  res.json(products);
});
*/

/* MongoDB Version */
app.get("/list-product", async (req, res) => {
  try {
    const products = await mongoDB.getProductNames();
    res.json(products);
    // console.log(products);
  } catch (error) {
    console.log(`An error occured while getting list-product. Error: ${error}`);
  }
});

// Getting a list of supermarkets
/* MySQL Version */
/*
app.get("/list-supermarkets", async (req, res) => {
  const supermarkets = await mysql.getSupermarkets();
  res.json(supermarkets);
});
*/

/* MongoDB Version */
app.get("/list-supermarkets", async (req, res) => {
  try {
    const supermarkets = await mongoDB.getSupermarkets();
    res.json(supermarkets);
    // console.log(supermarkets);
  } catch (error) {
    console.log(
      `An error occured while getting list-supermarkets. Error: ${error}`
    );
  }
});

//POSTS

/* MySQL Version */
// Saving Customer Registration Details
/*
app.post("/views/registration", urlencodedParser, async (req, res) => {
  console.log(req.body);
  const { name, username, password, eircode, email } = req.body;
  //Use the first password added
  const userPassword = password[0];
  //Combine address if two fields were used
  let address1 = req.body.address1;
  let address2 = req.body.address2;
  var fullAddress;
  address2 !== ""
    ? (fullAddress = address1 + " " + address2)
    : (fullAddress = address1);
  var myEircode;
  myEircode !== "" ? (myEircode = eircode) : (myEircode = "N/A");
  console.log(
    "The name is:" + name,
    "The password is:" + userPassword,
    "The eircode is: " + myEircode
  );
  //Check if user exists
  const existingUser = await mysql.checkLogin(username, userPassword);
  if (existingUser) {
    res.send("User exists already. Please choose a different username");
    res.redirect("/register");
  } else {
    // Register User
    try {
      await mysql.insertRegistration(
        name,
        username,
        userPassword,
        myEircode,
        fullAddress,
        email
      );
      console.log("Registration successful");
      res.redirect("/login");
    } catch (error) {
      console.log(`An error ${error} has occured`);
      res.redirect("/register");
    }
  }
});
*/

/* MongoDB Version */
app.post("/views/registration", urlencodedParser, async (req, res) => {
  console.log(req.body);
  const { name, username, password, eircode, email } = req.body;
  //Use the first password added
  const userPassword = password[0];
  //Combine address if two fields were used
  let address1 = req.body.address1;
  let address2 = req.body.address2;
  var fullAddress;
  address2 !== ""
    ? (fullAddress = address1 + " " + address2)
    : (fullAddress = address1);
  var myEircode;
  myEircode !== "" ? (myEircode = eircode) : (myEircode = "N/A");
  console.log(
    "The name is:" + name,
    "The password is:" + userPassword,
    "The eircode is: " + myEircode
  );
  //Check if user exists
  const existingUser = await mongoDB.checkLogin(username, userPassword);
  if (existingUser) {
    res.send("User exists already. Please choose a different username");
    res.redirect("/register");
  } else {
    // Register User
    try {
      await mongoDB.insertRegistration(
        name,
        username,
        userPassword,
        myEircode,
        fullAddress,
        email
      );
      console.log("Registration successful");
      res.redirect("/login");
    } catch (error) {
      console.log(`An error ${error} has occured`);
      res.redirect("/register");
    }
  }
});

/* MySQL Version */
// Checking Login Details Provided
/*
app.post("/views/login", urlencodedParser, async (req, res) => {
  const { username, password } = req.body;
  console.log("Username: " + username, "Password: " + password);
  try {
    const checkUser = await mysql.checkLogin(username, password);
    console.log(checkUser);
    if (checkUser) {
      const redirect = { redirect: "/", ,
        message: "Username" + username + "logged in", };
      res.json(redirect);
    } else {
      const message = { text: "Incorrect Password or Email Provided" };
      res.json(message);
    }
  } catch (error) {
    console.log("Login unsuccessful");
    res.redirect("/login");
  }
});
*/

/* MongoDB Version */
app.post("/views/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Username: " + username, "Password: " + password);
  try {
    const checkUser = await mongoDB.checkLogin(username, password);
    console.log(checkUser);
    if (checkUser) {
      const redirect = {
        redirect: "/",
        message: "Username " + username + " logged in",
      };
      res.json(redirect);
    } else {
      const message = { text: "Incorrect Password or Email Provided" };
      res.json(message);
    }
  } catch (error) {
    console.log("Login unsuccessful");
    res.redirect("/login");
  }
});

/* MySQL Version */
// Search and return a product name and size
/*
app.post("/search", async (req, res) => {
  const { product } = req.body; // Accessing JSON data in the request body
  console.log("accessing search");
  try {
    const products = await mysql.returnProduct(product);
    res.json(products);
  } catch (error) {
    console.log(
      `An error ${error} occured while getting product from database`
    );
    res.status(500).res.render(404);
  }
});
*/

/* MongoDB Version */
app.post("/search", async (req, res) => {
  const { formattedProduct } = req.body; // Accessing JSON data in the request body
  try {
    const products = await mongoDB.returnProduct(formattedProduct);
    res.json(products);
  } catch (error) {
    console.log(
      `An error ${error} occured while getting product from database`
    );
    res.status(500).res.render(404);
  }
});

/* MySQL Version */
//Gett all the information about a product
/*
app.post("/product-details", async (req, res) => {
  const { productName, size } = req.body;
  try {
    const products = await mysql.getProducts(productName, size);
    res.json(products);
  } catch (error) {
    console.log(
      `An error ${error} occured while getting several products from database`
    );
    res.status(500).res.render(404);
  }
});
*/

/* MongoDB Version */
app.post("/product-details", async (req, res) => {
  const { productName, size } = req.body;
  try {
    const products = await mongoDB.getProducts(productName, size);
    res.json(products);
  } catch (error) {
    console.log(
      `An error ${error} occured while getting several products from database`
    );
    res.status(500).res.render(404);
  }
});

/* MySQL Version */
// Get Product and Price with the lowest price
/*
app.post("/list-price", async (req, res) => {
  const { product, supermarket } = req.body;
  const topProduct = await mysql.getTopProduct(product, supermarket);
  res.json(topProduct);
});
*/

//MongoDB Version
app.post("/list-price", async (req, res) => {
  try {
    const { productName, shop } = req.body;
    const topProduct = await mongoDB.getTopProduct(productName, shop);
    res.json(topProduct);
  } catch (error) {
    console.log(
      `Error occured while getting cheapest product. Error: ${error}`
    );
  }
});

app.post("/list-basket", (req, res) => {
  try {
    basketTracker = req.body;
    console.log("Basket has: " + basketTracker);
  } catch (error) {
    console.log(`Failed to assign to basket tracker`);
  }
});

app.use((req, res, next) => {
  res.status(404).render("404");
});
