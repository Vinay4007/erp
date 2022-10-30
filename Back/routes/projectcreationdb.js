const jwt = require("jsonwebtoken");
const express = require("express");
const { rawListeners } = require("../models/projectcreationSchema");
const router = express.Router();
//var nodemailer = require("nodemailer");

require("../db/connec");
const projectfeedt = require("../models/tutionSchema");

router.get("/", (req, res) => {
  res.send("Hello from server of router");
});

router.post("/projectdetails", async (req, res) => {
  const { name, email, department, topic, numberstudents,idea,amount,time } = req.body;

  if (!name || !email || !department || !topic || !numberstudents || !idea || !amount || !time) {
    return res.status(422).json({ error: " fill the fields properly " });
  } else {
    const prodet = new projectfeedt({ name, email, department, topic, numberstudents,idea,amount,time });

    await prodet.save();

  

    res.status(201).json({ message: "success" });
  }
});



module.exports = router;
