const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
require("dotenv").config();

const container = require("./database/database");
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var fullAddress;
const port = process.env.PORT;
const localhost = process.env.MYSQL_HOST;

app.listen(port, localhost, (error) => {
  if (error) {
    console.log("An error " + error + "has occured.");
  } else {
    console.log("Server is listening on " + port + ". With host: " + localhost);
  }
});

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/views/index", (req, res) => {
  res.render("index");
});

app.get("/list", (req, res) => {
  res.render("list");
});

app.get("views/list", (req, res) => {
  res.render("list");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("registration");
});

app.get("/registration", (req, res) => {
  res.render("registration");
});

app.post("/views/registration", urlencodedParser, async (req, res) => {
  const { username, password, address, email } = req.body;
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
  const existingUser = await container.checkLogin(username, userPassword);
  if (existingUser) {
    res.send("User exists already. Please choose a different username");
    res.redirect("/register");
  } else {
    // Register User
    try {
      await container.insertQuery(username, userPassword, fullAddress, email);
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
  console.log("username is: " + username + " password is: " + password);
  try {
    const checkUser = await container.checkLogin(username, password);
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

app.use((req, res, next) => {
  res.status(404).render("404");
});
