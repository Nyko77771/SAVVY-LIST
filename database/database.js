//Using mysql
const mysql = require("mysql2");

// MySQL - Database 1
// const pool = mysql
// host: MYSQL.HOST,
// user: MYSQL.USER,
// password: MYSQL.PASSWORD,
// database: MYSQL.DATABASE,
//   })
//   .promise();

// MySQL - Database 2
const pool = mysql
  .createPool({
    host: MYSQL2.HOST,
    user: MYSQL2.USER,
    password: MYSQL2.PASSWORD,
    database: MYSQL2.DATABASE,
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
