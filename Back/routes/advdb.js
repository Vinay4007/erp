const jwt = require('jsonwebtoken');
const express = require('express');
const { rawListeners } = require('../models/advSchema');
const router = express.Router();

require("../db/connec");
const advdata = require("../models/advSchema");

router.get('/',(req,res) => {
    res.send('Hello from server of router')
});

router.post('/adv', async (req,res)=>{

    const { name, email, phone, advancereq } = req.body

    if( !name || !email || !phone || !advancereq ){
        return res.status(422).json({error: " fill all fields "})
    }


    else {
            const adv = new advdata({ name, email, phone, advancereq});
            
            await adv.save();
            res.status(201).json({message:"Request Sent"})
            }

})


module.exports = router;