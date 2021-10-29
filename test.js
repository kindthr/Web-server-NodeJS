const express = require("express")
const mysql = require ("mysql")
const cors = require ("cors")


const app = express()
app.use(cors())


app.use(express.json())

const db = mysql.createConnection({
    user:"user1", 
    host:"192.168.1.117",
    password:"energitech",
    database :"energitech",
    port: 3306,
    connectionLimit : 1000
})

db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
  db.query("SELECT *  FROM AirMonitoring", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

const usersRouter= require("./routes/routes");

app.use("/api/", usersRouter)

app.listen(8080, ()=>{
    console.log("server is running")
})