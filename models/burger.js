// Import packages
const path = require("path");

// Talk to the ORM
const orm = require(path.join(__dirname, "..", "config", "orm.js"));


const burger = {
    "getBurgers": function(callback) {
        orm.selectAll("burgers", callback);
    },

    "addBurger": function(name, protein, devoured, callback) {
        const object = {
            name,
            protein,
            devoured,
        }

        orm.insertOne("burgers", object, callback);
    },

    "updateBurger": function(id, name, protein, devoured, callback) {
        const id_object = {
            "name" : "id",
            "value": id
        };

        const object = {
            name,
            protein,
            devoured,
         
        }
        
        orm.updateOne("burgers", id_object, object, callback);
    },

    "deleteBurger": function(id, callback) {
        const id_object = {
            "name" : "id",
            "value": id
        };
        
        orm.deleteOne("burgers", id_object, callback);
    }
};

module.exports = burger;