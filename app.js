var express = require('express'),
    request = require('request'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    api = require('./api/api'),
    newsSeed = require('./seeds/article_seed'),
    Article = require('./models/article')
    app = express();


//App Config
mongoose.connect("mongodb://localhost/stock_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
newsSeed();

//Routes
app.get("/", function(req, res){
  Article.find({}, function(err, articles){
    if(err){
      console.log(err);
    }
    else{
      res.render("index", {data: articles});
    }
  });
  api.getNews(function (response) {
    data = response;
    res.render('index', {data: data});
  });
})

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
  console.log("listening on: " + port);
});
