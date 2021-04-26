//setup
var express = require("express");
var logger = require("morgan");

var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;
var mongoose = require("mongoose");

//db
var configDB = require("./config/database.js");
mongoose.connect(configDB.url);

//middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//routes
require("./app/routes.js")(app);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });*/

module.exports = app;

//launch
app.listen(port);
console.log("server starting on port " + port);
