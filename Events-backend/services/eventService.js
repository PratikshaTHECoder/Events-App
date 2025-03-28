const db = require("../config/db.config");

exports.getEventsByCity = (city, callback) => {
    db.query(
        "SELECT * FROM events WHERE city = ?", [city], 
        (err, results) => {
        console.log(results, "Results")
        if (err) {
            return callback("Database error: " + err.message);
        }
        callback(null, results);
    });
};

exports.getEventById = (id, callback) => {
    db.query("SELECT * FROM events WHERE id = ?", [id], (err, results) => {
        if (err) {
            return callback("Database error: " + err.message);
        }
        if (results.length === 0) {
            return callback("Event not found");
        }
        callback(null, results[0]);
    });
};
