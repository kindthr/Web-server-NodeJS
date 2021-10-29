const mysql = require("mysql");

// 192.168.1.112 its for my raspberry  

const db = mysql.createConnection({
    host: "192.168.1.112",
    user: "user1",
    password: "energitech",
    database : "energitech",
    port: 3306,
    connectionLimit : 1000
  });

module.exports = db;