const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "Please include a valid email").not().isEmpty(),
  ],
  (req, res) => {
    res.send(req.body);
  }
);

module.exports = router;
