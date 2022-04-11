const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const ObjectId = require('mongoose').Types.ObjectId;

//get api
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

//get api by id
router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
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

//post api by id
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

//put api by id
router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        
        let emp={
        name:req.body.name,
        age:req.body.age,
        dept:req.body.dept,
        experience:req.body.experience
    };
        Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
            if(err){
                console.log("Error in updating data with id:"+ err);
            }else{
                res.send(doc);
            }
        });
    }else{
        return res.status(400).send('No record found with given id:'+ req.params.id);
    }
});

//delete api by id
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndDelete(req.params.id,(err,doc)=>{
            if(err){
                console.log("Error in deleting data with id:"+ err);
            }else{
                res.send(doc);
            }
        });
    }else{
        return res.status(400).send('No record found with given id:'+ req.params.id);
    }
});

module.exports=router;