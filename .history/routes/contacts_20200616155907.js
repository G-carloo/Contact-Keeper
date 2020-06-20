const express = require("express");
const router = (express = express.Router());

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Public
router.put("/", (req, res) => {
  res.send("Update a contact");
});

// @route   Delete api/contacts/:id
// @desc    Delete contacts
// @access  Private
router.delete("/", (req, res) => {
  res.send("Delete a contacts");
});

module.exports = router;
