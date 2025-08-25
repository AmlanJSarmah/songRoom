const express = require("express");
const router = express.Router();

// Controllers
const authController = require("../controllers/authController");

// Routes
router.post("/sign-up", authController.userSignUp);
router.post("/login", authController.userLogIn);

module.exports = router;
