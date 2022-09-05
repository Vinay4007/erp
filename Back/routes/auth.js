const express = require('express');
const router = express.Router();
require("../db/connec");
const User = require("../models/userSchema");

router.get('/',(req,res) => {
    res.send('Hello from server of router')
});

router.post('/register', async (req,res)=>{

    const { name, email, phone, password } = req.body

    if( !name || !email || !phone || !password ){
        return res.status(422).json({error: " fill properly labbe "})
    }


        try{

            const userExist = await User.findOne({email:email});

            if(userExist){
                return res.status(422).json({ error: "Email alraedy exist"});
            }

            const user = new User({ name, email, phone, password});

          await user.save();

            res.status(201).json({message:"success"})

           

        } catch (err) {

          console.log(err);
        }

        
    // console.log(name);
    //res.json({message : req.body.name})
    //res.send("mera register page")

})

router.post('/signin', async (req,res) => {
    // console.log(req.body);
    // res.json({message : "ok"})
    try{

        const {email , password} = req.body;

        if( !email || !password){
            return res.status(400).json({ error: "fill dat"});
        }

        const userLogin = await User.findOne({email:email});

        console.log(userLogin);
        if(!userLogin){
            res.status(400).json({message:"signin not success"})
        }
        else{ 
            res.status(201).json({message:"signin success"})
        }

    } catch (err) {

      console.log(err);
    }
})

module.exports = router;
