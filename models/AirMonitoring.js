const db = require("../config/db.config");


 
const AirMonitoring = function(table){
    this.id = table.id;
    this.Temperature = table.Temperature;
    this.Humidity = table.Humidity;
    this.AirCondition = table.AirCondition;

}
// get all data from airMonitoring


    AirMonitoring.getAllData = ( result) =>{
        db.query("SELECT *  FROM AirMonitoring", (err, res)=>{
            if(err){
                console.log('Error while fetching airMonitoring', err);
                result(err, null);
              
            }else{
                console.log('AirMonitoring fetched successfully');
                result(res, null);
            }
            db.end();
        })
        }

    module.exports = AirMonitoring;