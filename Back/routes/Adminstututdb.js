const jwt = require("jsonwebtoken");
const express = require("express");
const { rawListeners } = require("../models/AdminstututfeeSchema");
const router = express.Router();
//const authenticate = require("../middleware/authenticate");
var nodemailer = require("nodemailer");

require("../db/connec");
const admtutionfeedt = require("../models/AdminstututfeeSchema");

router.get("/AfeeDetails", async (req, res) => {
  // console.log(req.cookies);
  // const token = req.cookies.jwtoken;
  //console.log(req.rootUser);
  //const token = req.cookies.jwtoken;
  //const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
  const id = "633dcff33255e45d6af3127d";
  console.log(id);
  let temp = await admtutionfeedt.findOne({ id: id });

  return res.status(200).json({ success: true, data: temp });

  // const id = "633dcff33255e45d6af3127d";
  // console.log(id);
  // let temp = await admtutionfeedt.findOne({ id: id });

  // return res.status(200).json({ success: true, data: temp });
});

router.post("/admtutionfee", async (req, res) => {
  const { id, name, email, branch, amount } = req.body;

  if (!id || !name || !email || !branch || !amount) {
    return res.status(422).json({ error: " fill the fields properly " });
  } else {
    const admtutfee = new admtutionfeedt({ id, name, email, branch, amount });

    await admtutfee.save();

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
      subject: "Alert Due Fee Reminder",
      text: "Pay the due fee in the erp",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json({ message: "success" });
  }
});

module.exports = router;
