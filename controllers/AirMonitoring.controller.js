const AirModel = require('../models/AirMonitoring');


    //get All AirMonitoring list

    exports.getAllData = (req, res)=> {
       
        AirModel.getAllData((err, airMonitoring) =>{
            if(err)
            res.send(err);
            console.log('data', airMonitoring);
            res.send(airMonitoring)
        })
    }