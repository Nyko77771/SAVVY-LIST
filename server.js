//VERSION 1
//Method sending static HTTP pages

// const http = require("http");
// // const fs = require("fs");
// // const port = 8080;
// // const localhost = "127.0.0.1";

// const server = http.createServer((req, res) => {
//   let path = "./";
//   console.log("Server seeing " + req.url);
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/login":
//       path += "login.html";
//       res.statusCode = 200;
//       break;
//     case "/register":
//       path += "registration.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "default.html";
//       res.statusCode = 404;
//       break;
//   }
//   fs.readFile(path, (error, data) => {
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

app.use(express.static(path.join(__dirname, "public")));
console.log(`Serving static files from: ${localhost}`);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(port, (error) => {
  if (error) {
    console.log(`Error: ${error} has occured`);
  } else {
    console.log("Server is listening");
  }
});
