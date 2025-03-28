const { createPool } = require("mysql2");

const db = createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "event_database",
    connectionLimit: 10,
});

module.exports = db;


