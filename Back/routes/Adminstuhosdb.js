const jwt = require('jsonwebtoken');
const express = require('express');
const { rawListeners } = require('../models/AdminstuhosfeeSchema');
const router = express.Router();

require("../db/connec");
const admhostelfeedt = require("../models/AdminstuhosfeeSchema");

router.get('/',(req,res) => {
    res.send('Hello from server of router')
});

router.post('/admhostelfee', async (req,res)=>{

    const { name, email, branch, amount } = req.body

    if( !name || !email || !branch || !amount ){
        return res.status(422).json({error: " fill the fields properly "})
    }


        
            else {
                const admhosfee = new admhostelfeedt({ name, email, branch, amount});
            
                
     
     
               await admhosfee.save();
     
                 res.status(201).json({message:"success"})
            }

            

           

        } 

        

)



module.exports = router;