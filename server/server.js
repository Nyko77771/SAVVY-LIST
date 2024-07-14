//VERSION 1
//Method sending static HTTP pages

// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const port = 8080;
// const localhost = "127.0.0.1";

// const server = http.createServer((req, res) => {
//   let filePath = "";
//   console.log(req.url);
//   switch (req.url) {
//     case "/":
//       filePath += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/login":
//       filePath += "login.html";
//       res.statusCode = 200;
//       break;
//     case "/register":
//       filePath += "registration.html";
//       res.statusCode = 200;
//       break;
//     default:
//       filePath += "default.html";
//       res.statusCode = 404;
//       break;
//   }
//   console.log("The path currently is:" + filePath);
//   console.log("Dir name is:" + __dirname);
//   const absolutePath = path.join(__dirname, "..", "public", filePath);
//   console.log("Absolute path is:" + absolutePath);

//   fs.readFile(absolutePath, (error, data) => {
//     if (error) {
//       console.log("Error " + error + " has occurred.");
//       res.statusCode = 500;
//       res.end("Server Error");
//     } else {
//       res.setHeader("Content-Type", "text/html");
//       res.end(data);
//     }
//   });
// });

// server.listen(port, localhost, (error) => {
//   if (error) {
//     console.log("Error " + error + " has occured");
//   } else {
//     console.log("Server is waiting");
//   }
// });

//VERSION 2
//Using Express to send Dynamic HTTP objects
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
const localhost = "127.0.0.1";

app.use(express.static(path.join(__dirname, "..", "public")));
console.log(`Serving static files from: ${localhost}`);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "registration.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "login.html"));
});

app.use((req, res, next) => {
  const filePath = path.join(__dirname, "..", "public", "404.html");
  console.log("File path log:" + filePath);
  res.status(404).sendFile(filePath);
});

app.listen(port, (error) => {
  if (error) {
    console.log(`Error: ${error} has occured`);
  } else {
    console.log("Server is listening");
  }
});
