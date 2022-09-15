const jwt = require('jsonwebtoken');
const express = require('express');
const { rawListeners } = require('../models/feeSchema');
const router = express.Router();

require("../db/connec");
const feedt = require("../models/feeSchema");

router.get('/',(req,res) => {
    res.send('Hello from server of router')
});

router.post('/fee', async (req,res)=>{

    const { name, email, branch, semester,amount } = req.body

    if( !name || !email || !branch || !semester || !amount ){
        return res.status(422).json({error: " fill the fields properly "})
    }


        
            else {
                const fee = new feedt({ name, email, branch, semester, amount});
            
                
     
     
               await fee.save();
     
                 res.status(201).json({message:"success"})
            }

            

           

        } 

        

)

router.post('/hamfeestatus', async (req,res) => {
    // console.log(req.body);
    // res.json({message : "ok"})
    try{
        let token;
        const {name,branch,semester} = req.body;

        if( !name || !branch || !semester){
            return res.status(422).json({ error: "fill data correctly"});
        }

        const messcheck = await feedt.findOne({name:name,branch:branch,semester:semester});
          
        if(messcheck){
            
            
            token = await messcheck.generateAuthToken();
            console.log(token);
            res.json({ message: "Fee paid"});

            
        } else{
            res.status(422).json({ error:"not paid"});
        }
         
    } catch (err) { 

      console.log(err);
    }
})

module.exports = router;