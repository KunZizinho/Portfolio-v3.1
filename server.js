//Dependecies
const express = require("express");
const handlebars = require("express-handlebars");

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//setup handlebars engine
app.engine("handlebars", handlebars(
    {defaultLayout: "main"}
));
app.set("view engine", "handlebars");

//  handlebar routes
app.get("/", function(req, res) {

    res.render("");
  });


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});
