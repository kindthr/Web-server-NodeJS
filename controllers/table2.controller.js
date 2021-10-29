const Table2Model = require('../models/table2');

const express = require('express');

const { request } = require('express');

const app = express();

    //get All table list

    exports.getAllData = (req, res)=> {
       
        Table2Model.getAllData((err, table2) =>{
            console.log('**************************');
            if(err)
            res.send(err);
            console.log('data', table2);
            res.send(table2)
        })
    }