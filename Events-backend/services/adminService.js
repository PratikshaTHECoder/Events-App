const db = require("../config/db.config");

// Admin Login Service
exports.adminLogin = ({ email, password }, callback) => {
    const query = "SELECT id, name, city FROM admin WHERE email = ? AND password = ?";

    db.query(query, [email, password], (err, results) => {
        if (err) return callback("Database error!");
        if (results.length === 0) return callback("Invalid credentials!");

        return callback(null, "Login successful", results[0]);
    });
};

// Create Event Service
exports.createEvent = (eventData, callback) => {
    const { event_name, date, time, duration, address, city, description } = eventData;
    const query = `
        INSERT INTO events (event_name, date, time, duration, address, city, description, create_at, update_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;

    db.query(query, [event_name, date, time, duration, address, city, description], (err, result) => {
        if (err) return callback("Database error!");

        return callback(null, "Event created successfully!", { id: result.insertId, ...eventData });
    });
};
