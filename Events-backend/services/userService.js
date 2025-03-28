const db = require("../config/db.config");

exports.register = ({ name, email, password, city, state, phone_number, date_of_birth, district }, callback) => {
    db.query(
        "INSERT INTO users (name, email, password, city, state, phone_number, date_of_birth, district ) VALUES (?, ?, ?, ?,?,?,?,?)",
        [name, email, password, city, state, phone_number, date_of_birth, district],
        (err, result) => {
            if (err) {
                return callback("Database error: " + err.message);
            }
            callback(null, "User registered successfully", result);
        }
    );
};


exports.login = ({ email, password }, callback) => {
    db.query(
        "SELECT id, name, email, city FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, results) => {
            if (err) {
                return callback("Database error: " + err.message);
            }
            if (results.length === 0) {
                return callback("Invalid email or password");
            }

            const user = results[0]; // Get user data
            callback(null, "Login successful", { id: user.id, name: user.name, email: user.email, city: user.city });
        }
    );
};

