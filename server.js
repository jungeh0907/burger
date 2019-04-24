/********** Initialization **********/

const express        = require("express");
const exphbs         = require("express-handlebars");
const path           = require("path");
const methodOverride = require("method-override");
const bodyParser     = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Set up for public directory
const directory_public = path.join(__dirname, "public");
app.use(express.static(directory_public));

// Set up for Express to handle parsing data
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": false}));

// Set up for handlebars
app.engine("handlebars", exphbs({"defaultLayout": "main"}));
app.set("view engine", "handlebars");



/********* Controllers Initialization *********/

app.use(methodOverride("_method"));

// Set up for controllers directory
const directory_controllers = path.join(__dirname, "controllers");

// Talk to the burger controller
app.use("/", require(
    path.join(directory_controllers, "burger_controller.js"))
);

/********* Listen for connections on the port **********/
app.listen(PORT, () => console.log(`App now listening at ${PORT}.`));
