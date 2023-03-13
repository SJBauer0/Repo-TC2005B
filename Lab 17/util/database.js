const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "actionsgoals",
  port: 8080,
  password : ""
});

module.exports = pool.promise();
