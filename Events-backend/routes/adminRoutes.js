const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

console.log("In admin route")
// Admin Login - Returns admin's city
router.post("/login", adminController.adminLogin);

// Create Event
router.post("/create-event", adminController.createEvent);

module.exports = router;
