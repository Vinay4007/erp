const jwt = require('jsonwebtoken');
const express = require('express');
const { rawListeners } = require('../models/FeedbackSchema');
const router = express.Router();

require("../db/connec");
const feeddata = require("../models/FeedbackSchema");
const { FaUndo } = require('react-icons/fa');

router.get('/',(req,res) => {
    res.send('Hello from server of router')
});

router.post('/feed', async (req,res)=>{
     
    const { name, email, phone, rating,issues,suggestions } = req.body

    if( !name || !email || !phone || !rating || !issues || !suggestions){
        return res.status(422).json({error: " fill all fields "})
    }


    else {
            const feed = new feeddata({ name, email, phone, rating,issues,suggestions});
            
            await feed.save();
            res.status(201).json({suggestions:"Request Sent"})
            }

})


module.exports = router;