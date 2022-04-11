const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MeanDB',(err)=>{
    if(err){
        console.log("Error occured:"+ err);
    }
    else{
        console.log("Connection to MongoDB Successful!");
    }
});

module.exports=mongoose;

//this file is used to connect mongodb via mongoose.