const jwt = require('jsonwebtoken');
const express = require('express');
const { rawListeners } = require('../models/userSchema');
const router = express.Router();
const bcrypt = require('bcryptjs');


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
            }else if(password != password){
             return res.status(422).json({ error: "password is not matching"})
            }else {
                const user = new User({ name, email, phone, password});
            
                // hashing the password
     
     
               await user.save();
     
                 res.status(201).json({message:"success"})
            }

            

           

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
        let token;
        const {email , password} = req.body;

        if( !email || !password){
            return res.status(400).json({ error: "fill dat"});
        }

        const userLogin = await User.findOne({email:email});
          
        
         
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password)
            
            token = await userLogin.generateAuthToken();
            console.log(token);

        //    res.cookie("jwtoken",token,{
        //     expires:new Date(Date.now() + 2589200000),
        //     httpOnly:true
        //    })

            if (!isMatch){
                res.status(400).json({ error:"Invalid Credentials"});
             } else {
                res.json({ message: "user Signin Successful"});
             }
        } else{
            res.status(400).json({ error:"Invalid Credential"});
        }
         

        //console.log(userLogin);
        // if(!userLogin){
        //     res.status(400).json({message:"signin not success"})
        // }
        // else{ 
        //     res.status(201).json({message:"signin success"})
        // }

    } catch (err) { 

      console.log(err);
    }
})

module.exports = router;
