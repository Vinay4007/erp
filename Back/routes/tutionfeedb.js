const jwt = require('jsonwebtoken');
const express = require('express');
const { rawListeners } = require('../models/tutionSchema');
const router = express.Router();

require("../db/connec");
const tutionfeedt = require("../models/tutionSchema");

router.get('/',(req,res) => {
    res.send('Hello from server of router')
});

router.post('/tutionfee', async (req,res)=>{

    const { name, email, branch, semester,amount } = req.body

    if( !name || !email || !branch || !semester || !amount ){
        return res.status(422).json({error: " fill the fields properly "})
    }


        
            else {
                const tutfee = new tutionfeedt({ name, email, branch, semester, amount});
            
                
     
     
               await tutfee.save();
     
                 res.status(201).json({message:"success"})
            }

            

           

        } 

        

)

router.post('/tutfeestatus', async (req,res) => {
    // console.log(req.body);
    // res.json({message : "ok"})
    try{
        let token;
        const {name,branch,semester} = req.body;

        if( !name || !branch ||  !semester){
            console.log(name,branch,semester);
            return res.status(422).json({ error: "fill data correctly"});
            
        }

        const tutcheck = await tutionfeedt.findOne({name:name,branch:branch,semester:semester});
          
        if(tutcheck){
            
            
            token = await tutcheck.generateAuthToken();
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