const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", auth, (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
  res.status(500).send('Server Error');
  }
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put("/", (req, res) => {
  res.send("Update a contact");
});

// @route   DELETE api/contacts/:id
// @desc    Delete contacts
// @access  Private
router.delete("/", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
