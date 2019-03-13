var express = require('express'),
    request = require('request'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    api = require('./api/api'),
    app = express();


//App Config
mongoose.connect("mongodb://localhost/stock_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Routes
app.get("/", function(req, res){
  var data = '';
  api.getNews(function (response) {
    data = response;
    res.render('index', {data: data});
  });
})

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
  console.log("listening on: " + port);
});
