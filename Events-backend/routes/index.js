const express = require("express");
const router = express.Router();

// Import route files
const userRoutes = require("./userRoutes");
const eventRoutes = require("./eventsRoutes");
const adminRoutes = require("./adminRoutes"); 

router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
