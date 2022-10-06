const jwt = require("jsonwebtoken");
const express = require("express");
const { rawListeners } = require("../models/AdminstuhosfeeSchema");
const router = express.Router();
var nodemailer = require("nodemailer");
require("../db/connec");
const admhostelfeedt = require("../models/AdminstuhosfeeSchema");

router.get("/AhosfeeDetails", async (req, res) => {
  const id = "633dcff33255e45d6af3127d";
  console.log(id);
  let temp = await admhostelfeedt.findOne({ id: id });

  return res.status(200).json({ success: true, data: temp });
  //res.send('Hello from server of router')
});

router.post("/admhostelfee", async (req, res) => {
  const { id, name, email, branch, amount } = req.body;

  if (!id || !name || !email || !branch || !amount) {
    return res.status(422).json({ error: " fill the fields properly " });
  } else {
    const admhosfee = new admhostelfeedt({ id, name, email, branch, amount });

    await admhosfee.save();

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
