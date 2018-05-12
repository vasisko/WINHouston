var express = require("express");
var path = require('path');
var db = require("./models");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');
var expressValidator = require ('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

var PORT = process.env.PORT || 3000;



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/winController.js");

// app.use("/", routes);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({force: true}).then(function(){
app.listen(PORT, function() {
 // Log (server-side) when our server has started
 console.log("Server listening on: http://localhost:" + PORT);
});
});