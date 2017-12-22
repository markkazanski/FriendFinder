var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



//HEROKU
//Creating app... done, aqueous-chamber-37940
//https://aqueous-chamber-37940.herokuapp.com/ | https://git.heroku.com/aqueous-chamber-37940.git
//Domain: Your app can be found at https://aqueous-chamber-37940.herokuapp.com/

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });