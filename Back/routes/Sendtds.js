const express = require("express");
const { rawListeners } = require("../models/tdsSchema");
const router = express.Router();

var nodemailer = require("nodemailer");

require("../db/connec");
const tds = require("../models/tdsSchema");
router.get("/", (req, res) => {
  res.send("Hello from server of router");
});

router.post("/sendtds", async (req, res) => {
  const { email, subject, text } = req.body;

  if (!email || !subject || !text) {
    return res.status(422).json({ error: " Fill all entries" });
  } else {
    const tdsdata = new tds({ email, subject, text });

    await tdsdata.save();

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
      subject: subject,
      text: text,
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
  //   const user = new TDS({ email, subject, text });

  //   await user.save();
});

module.exports = router;
