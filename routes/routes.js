const express = require('express');
const router = express.Router();

const airController = require('../controllers/AirMonitoring.controller');



// get latest record of airMonitoring 
router.get("/", airController.getAllData);


module.exports = router;