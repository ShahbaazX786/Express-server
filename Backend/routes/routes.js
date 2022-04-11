const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const ObjecId = require('mongoose').Types.ObjecId;

router.get('/',(req,res)=>{
    Employee.find( (err,doc)=>{
        if(err){
            console.log("Error in get data:"+err);
        }
        else{
            res.send(doc);
        }
    })
});


router.get('/:id',(req,res)=>{
    if(ObjecId.isValid(req.params.id)){
        Employee.findById(req.params.id,(err,doc)=>{
            if(err){
                console.log("Error in get data with id:"+ err);
            }else{
                res.send(doc);
            }
        });
    }else{
        return res.status(400).send('No record found with given id:'+ req.params.id);
    }
});



router.post('/',(req,res)=>{
    let emp=new Employee({
        name:req.body.name,
        age:req.body.age,
        dept:req.body.dept,
        experience:req.body.experience
    });
    emp.save((err,doc)=>{
        if(err){
            console.log("Error in posting data:"+err);
        }
        else{
            res.send(doc);
        }
    })
})


module.exports=router;