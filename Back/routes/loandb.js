const jwt = require('jsonwebtoken');
const express = require('express');
const { rawListeners } = require('../models/loanSchema');
const router = express.Router();

require("../db/connec");
const loandata = require("../models/loanSchema");

router.get('/',(req,res) => {
    res.send('Hello from server of router')
});

router.post('/newloan', async (req,res)=>{

    const { name, email, phone, loannum,bankname,loanamount,emileft } = req.body

    if( !name || !email || !phone || !loannum || !bankname || !loanamount || !emileft ){
        return res.status(422).json({error: " fill all fields "})
    }


    else {
            const loan = new loandata({ name, email, phone, loannum,bankname,loanamount,emileft});
            
            await loan.save();
            res.status(201).json({message:"Request Sent"})
            }

})


module.exports = router;