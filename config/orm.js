// Import packages
const mysql = require("mysql");
const path  = require("path");

// Talk to the database
const connection = require(path.join(__dirname, "connection.js"));

const orm = {
    // Select all rows in a table
    "selectAll": function(table_name, cb) {
        querySQL(`SELECT * FROM ${table_name};`, cb);
    },

    // Insert a row into a table
    "insertOne": function(table_name, object, cb) {
        const keys = [], values = [];

        // Use a for loop to pair keys and values correctly (Object.values is not fully implemented yet)
        for (let key in object) {
            keys.push(key);
            values.push(addQuotes(object[key]));
        }
        
        querySQL(`INSERT INTO ${table_name} (${keys.join(", ")}) VALUES (${values.join(", ")});`, cb);
    },

    // Update a row in a table
    "updateOne": function(table_name, id_object, object, cb) {
        const key_values = [];

        for (let key in object) {
            key_values.push(`${key} = ${addQuotes(object[key])}`);
        }

        querySQL(`UPDATE ${table_name} SET ${key_values.join(", ")} WHERE ${id_object.name} = ${id_object.value};`, cb);
    },

    // Delete a row from a table
    "deleteOne": function(table_name, id_object, cb) {
        querySQL(`DELETE FROM ${table_name} WHERE ${id_object.name} = ${id_object.value};`, cb);
    }
}

module.exports = orm;
