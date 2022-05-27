const mongoose = require('mongoose');
require('dotenv').config();
const mdbconnection = ()=>{
    mongoose.connect(process.env.MONGOOSE,(err)=>{
        if(err)
            console.log(err);
        else
            console.log("connected to database successfully");
    });
}

module.exports = mdbconnection;