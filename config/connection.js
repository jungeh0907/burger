// Import packages
const mysql = require("mysql");
var connection;
// For testing on localhost
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        passwrod: 'hackthepanet',
        database: 'todoagain_db'
    });
};

// Connect to database
const pool = mysql.createPool(process.env.JAWSDB_URL || config_localhost);

module.exports = connection;