const db = require("../config/db.config");


 
var Table2 = function(table){
    this.id = table.id;
    this.Temperature = table.Temperature;
    this.Humidite = table.Humidite;
    this.co2 = table.co2;
    this.energie = table.energie;

}
// get all data from table1

    Table2.getAllData = (result) =>{
        db.query('SELECT * FROM data', (err, res)=>{
            if(err){
                console.log('Error while fetching table 2', err);
                result(null,err);
            }else{
                console.log('table 2 fetched successfully');
                result(null,res);
            }
        })
    }

    module.exports = Table2;