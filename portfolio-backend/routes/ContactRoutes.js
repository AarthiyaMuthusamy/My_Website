const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "New Portfolio Contact Message",
      text: `
        Name: ${name}
        Email: ${email}
        Phone:${phone}
        Message: ${message}
      `,
    });

    res.status(201).json({ success: true, message: "Message sent!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
