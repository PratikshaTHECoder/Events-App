const adminService = require("../services/adminService");

// Admin Login
exports.adminLogin = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ status: 0, message: "Email and password are required!" });
    }

    adminService.adminLogin({ email, password }, (error, message, adminData) => {
        if (error) {
            return res.status(400).json({ status: 0, message: error });
        }

        return res.status(200).json({ status: 1, data: adminData, message });
    });
};

// Create Event
exports.createEvent = (req, res) => {
    const { event_name, date, time, duration, address, city, description } = req.body;

    if (!event_name || !date || !time || !duration || !address || !city || !description) {
        return res.status(400).json({ status: 0, message: "All event fields are required!" });
    }

    adminService.createEvent(req.body, (error, message, eventData) => {
        if (error) {
            return res.status(400).json({ status: 0, message: error });
        }

        return res.status(201).json({ status: 1, data: eventData, message });
    });
};
