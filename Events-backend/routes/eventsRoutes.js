const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// Routes passing control to controller
router.get("/events/:city", eventController.getEventsByCity);
router.get("/eventDetails/:id", eventController.getEventById);

module.exports = router;
