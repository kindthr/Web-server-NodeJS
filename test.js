const db = require('./config/db.config');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const router = express.Router();

const airController = require('./controllers/AirMonitoring.controller');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


// Load HTTP module
const http = require("http");

const hostname = "192.168.1.121";

const port = process.env.PORT || 8080;

const TableRoutes = require('./routes/routes');

// Create HTTP server
const server = http.createServer(function(req, res) {
console.log("http was created!");

  if(req.url == '/api/airMonitoring'){
    res.writeHead(200, { 'Content-Type': 'application/json' });    
    res.end();  
}
});



db.connect(function(err) {
  if (err) throw err;
  console.log("Connection established !");
  db.query("SELECT *  FROM AirMonitoring", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
{/* 
 */}

 app.use('/api/', TableRoutes);

 {/*app.listen(PORT, () => {
   console.log(`Example app listening at http://localhost:${PORT}`)
 })
*/}
// Prints a log once the server starts listening
server.listen(port, "0.0.0.0", function() {
   console.log(`Server running at http://${hostname}:${port}/`);
})