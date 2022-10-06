const jwt = require('jsonwebtoken');
const express = require('express');
const { rawListeners } = require('../models/hosfeeSchema');
const router = express.Router();

require("../db/connec");
const hosfeedt = require("../models/hosfeeSchema");

router.get('/',(req,res) => {
    res.send('Hello from server of router')
});

router.post('/hostelfee', async (req,res)=>{

    const { name, email, branch, semester,amount } = req.body

    if( !name || !email || !branch || !semester || !amount ){
        return res.status(422).json({error: " fill the fields properly "})
    }


        
            else {
                const hostfee = new hosfeedt({ name, email, branch, semester, amount});
            
                
     
     
               await hostfee.save();
     
                 res.status(201).json({message:"success"})
            }

            

           

        } 

        

)

router.post('/hosfeestatus', async (req,res) => {
    // console.log(req.body);
    // res.json({message : "ok"})
    try{
        let token;
        const {semester} = req.body;

        if( !semester){
            return res.status(422).json({ error: "fill data correctly"});
        }

        const hoscheck = await hosfeedt.findOne({semester:semester});
          
        if(hoscheck){
            
            
            token = await hoscheck.generateAuthToken();
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