const jwt = require('jsonwebtoken');
const express = require('express');
const { rawListeners } = require('../models/fundingrequestSchema');
const router = express.Router();

require("../db/connec");
const funddata = require("../models/fundingrequestSchema");
const { FaUndo } = require('react-icons/fa');

router.get('/',(req,res) => {
    res.send('Hello from server of router')
});

router.post('/fund', async (req,res)=>{

    const { name, email, phone, prevfunddetails,fundingamount,message } = req.body

    if( !name || !email || !phone || !prevfunddetails || !fundingamount || !message){
        return res.status(422).json({error: " fill all fields "})
    }


    else {
            const fund = new funddata({ name, email, phone, prevfunddetails,fundingamount,message});
            
            await fund.save();
            res.status(201).json({message:"Request Sent"})
            }

})


module.exports = router;