//example of an data model

const mongoose = require('mongoose');

const  Employee = mongoose.model('Employee',{
    name:{type:String},
    age:{type:Number},
    dept:{type:String},
    experience:{type:Number}
});

module.exports=Employee;