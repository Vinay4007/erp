const jwt = require("jsonwebtoken");
const express = require("express");
const { rawListeners } = require("../models/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const authenticate1 = require("../middleware/authenticate1");
var nodemailer = require("nodemailer");

require("../db/connec");
const User = require("../models/userSchema");
const admtutionfeedt = require("../models/AdminstututfeeSchema");
router.get("/", (req, res) => {
  res.send("Hello from server of router");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(422).json({ error: " fill properly " });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email alraedy exist" });
    } else if (password != password) {
      return res.status(422).json({ error: "password is not matching" });
    } else {
      const user = new User({ name, email, phone, password });

      // hashing the password

      await user.save();

      res.status(201).json({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "team23438@gmail.com",
      pass: "rdgtxdmeldnylsag",
    },
  });

  var mailOptions = {
    from: "team23438@gmail.com",
    to: email,
    subject: "ERP Account Details",
    text: "You Successfully created an account in the erp",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  // console.log(name);
  //res.json({message : req.body.name})
  //res.send("mera register page")
});

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({message : "ok"})
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "fill data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(422).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "user Signin Successful" });
      }
    } else {
      res.status(422).json({ error: "Invalid Credential" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  console.log("Hello About");
  res.send(req.rootUser);
});

router.get("/admstutut", authenticate1, (req, res) => {
  console.log("Automatic data filling");
  res.send(req.rootUser);
});

//   app.post('/about', (req, res) => {
//     console.log(req.body);
//     db.collection('USER').insertOne(req.body, (err, data) => {
//         if(err) return console.log(err);
//         res.send(('saved to db: ' + data));
//     })
// });

module.exports = router;
