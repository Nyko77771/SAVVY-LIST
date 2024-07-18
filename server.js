const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
require("dotenv").config();

const { insertQuery } = require("./database/database");
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

app.post("/views/registration", urlencodedParser, (req, res) => {
  console.log(req.body);
  const { username, password, address, email } = req.body;
  const userPassword = password[0];
  let address1 = req.body.address1;
  let address2 = req.body.address2;
  address2 !== ""
    ? (fullAddress = address1 + " " + address2)
    : (fullAddress = address1);
  try {
    insertQuery(username, userPassword, fullAddress, email);
    console.log("Registration successful");
    res.redirect("/login");
  } catch (error) {
    console.log(`An error ${error} has occured`);
    res.redirect("/register");
  }
});

// app.post();

app.use((req, res, next) => {
  res.status(404).render("404");
});
