const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "actionsgoals",
  port: 3306,
  password : ""
});

module.exports = pool.promise();
