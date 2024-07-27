const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
require("dotenv").config();

const mysql = require("./database/database");
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var fullAddress;
const port = process.env.PORT;
const localhost = process.env.MYSQL2_HOST;

app.listen(port, localhost, (error) => {
  if (error) {
    console.log("An error " + error + "has occured.");
  } else {
    console.log("Server is listening on " + port + ". With host: " + localhost);
  }
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", { script: "search.js" });
});

app.get("/views/index", (req, res) => {
  res.render("index", { script: "search.js" });
});

app.get("/list", (req, res) => {
  res.render("list", { script: "list.js" });
});

app.get("views/list", (req, res) => {
  res.render("list", { script: "list.js" });
});

app.get("/login", (req, res) => {
  res.render("login", { script: "registerLogin.js" });
});

app.get("/register", (req, res) => {
  res.render("registration", { script: "registerLogin.js" });
});

app.get("/registration", (req, res) => {
  res.render("registration", { script: "registerLogin.js" });
});

app.get("/checkout", (req, res) => {
  res.render("checkout", { script: "checkout.js" });
});

app.get("/list-product", async (req, res) => {
  const products = await mysql.getProductNames();
  res.json(products);
});

app.get("/list-supermarkets", async (req, res) => {
  const supermarkets = await mysql.getSupermarkets();
  console.log(supermarkets);
  res.json(supermarkets);
});

app.post("/views/registration", urlencodedParser, async (req, res) => {
  const { personName, username, password, eircode, email } = req.body;
  //Use the first password added
  const userPassword = password[0];
  //Combine address if two fields were used
  let address1 = req.body.address1;
  let address2 = req.body.address2;
  address2 !== ""
    ? (fullAddress = address1 + " " + address2)
    : (fullAddress = address1);
  console.log("The username is:" + username, "The password is:" + userPassword);
  //Check if user exists
  const existingUser = await mysql.checkLogin(username, userPassword);
  if (existingUser) {
    res.send("User exists already. Please choose a different username");
    res.redirect("/register");
  } else {
    // Register User
    try {
      await mysql.insertRegistration(
        personName,
        username,
        userPassword,
        eircode,
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

app.post("/views/login", urlencodedParser, async (req, res) => {
  const { username, password } = req.body;
  try {
    const checkUser = await mysql.checkLogin(username, password);
    if (checkUser) {
      console.log("Successfully logged in");
      res.redirect("/");
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.log("Login unsuccessful");
    res.redirect("/login");
  }
});

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

app.post("/product-details", async (req, res) => {
  const { productName, size } = req.body;
  try {
    const products = await mysql.getProducts(productName, size);
    res.json(products);
  } catch (error) {
    console.log(
      `An error ${error} occured while getting several products from database`
    );
  }
});

app.post("/list-price", async (req, res) => {
  const { product, supermarket } = req.body;
  const topProduct = await mysql.getTopProduct(product, supermarket);
  res.json(topProduct);
});

app.use((req, res, next) => {
  res.status(404).render("404");
});
