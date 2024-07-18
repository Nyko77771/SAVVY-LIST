//Using mysql
const mysql = require("mysql2");
require("dotenv").config();

mysql.conn;

// MySQL - Database 1
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: "VeryLongANDB0r1nGAns1",
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

// MySQL - Database 2
// const pool = mysql
//   .createPool({
//     host: MYSQL2_HOST,
//     user: MYSQL2_USER,
//     password: MYSQL2_PASSWORD,
//     database: MYSQL2_DATABASE,
//   })
//   .promise();

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
      "SELECT user_name FROM user_details WHERE (user_name = ?) AND (pass_word = ?)",
      [username, password]
    );
    return rows.length > 0 && username === rows[0].user_name ? true : false;
  } catch (error) {
    console.log("An error " + error + "has occurred.");
    return false;
  }
}

// async function getQuery() {
//   const result = await pool.query("SELECT * FROM user_details");
//   console.log(result[0]);
// }

async function insertQuery(username, password, address, email) {
  console.log(process.env.MYSQL_HOST);
  await pool.query(
    "INSERT INTO user_details (user_name, pass_word, address, email) VALUES (?, ?, ?, ?)",
    [username, password, address, email]
  );
}

module.exports = {
  checkLogin,
  insertQuery,
};
