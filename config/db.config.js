const mysql = require("mysql");

const db = mysql.createConnection({
    host: "192.168.1.117",
    user: "user1",
    password: "energitech",
    database : "energitech",
    port: 3306,
    connectionLimit : 1000
  });

module.exports = db;