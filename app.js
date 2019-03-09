//Import Variables (Express, mongoose, request)
//Set view engine to EJS
//Set up mongoose database
var express = require('express'),
    request = require('request'),
    mongoose = require('mongoose'),
    app = express();

//App Config
mongoose.connect("mongodb://localhost/stock_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));

//Routes
app.get("/", function(req, res){
  res.render("index");
})

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
  console.log("listening on: " + port);
});
//Set up app.listen
