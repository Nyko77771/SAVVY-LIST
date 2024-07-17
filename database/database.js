//Using mysql
const mysql = require("mysql2");

// MySQL - Database 1
// const pool = mysql
//   .createPool({
//     host: "127.0.0.1",
//     user: "root",
//     password: "VeryLongANDB0r1nGAns1",
//     database: "testsavvy",
//   })
//   .promise();

// MySQL - Database 2
const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "testsavvy",
  })
  .promise();

// async function getQuery() {
//   const result = await pool.query("SELECT * FROM user_details");
//   console.log(result[0]);
// }

async function insertQuery(username, password, address, email) {
  await pool.query(
    "INSERT INTO user_details (user_name, pass_word, address, email) VALUES (?, ?, ?, ?)",
    [username, password, address, email]
  );
}

module.exports = {
  insertQuery,
};
