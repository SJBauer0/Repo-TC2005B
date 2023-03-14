const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "bauer",
  database: "actionsgoals",
  port : 3306,
  password : ""
});

module.exports = pool.promise();
