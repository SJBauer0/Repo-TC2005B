const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'actionsgoals',
  port: 8889,
  password: 'root',
});

module.exports = pool.promise();
