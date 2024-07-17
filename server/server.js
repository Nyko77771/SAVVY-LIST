const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");

const { insertQuery } = require("../database/database");
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var fullAddress;
const port = 8080;
const localhost = "127.0.0.1";

app.listen(port, localhost, (error) => {
  if (error) {
    console.log("An error " + error + "has occured.");
  } else {
    console.log("Server is listening");
  }
});

app.get("/", (res, req) => {
  res.render("index");
});

app.get("/index", (res, req) => {
  res.render("index");
});

app.get("/list", (res, req) => {
  res.render("list");
});

app.get("/login", (res, req) => {
  res.render("login");
});

app.get("/register", (res, req) => {
  res.render("registration");
});

app.post("/public/registration.html", urlencodedParser, (req, res) => {
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
  } catch (error) {
    console.log(`An error ${error} has occured`);
  }
});

app.use((req, res, next) => {
  res.status(404).render("404");
});
