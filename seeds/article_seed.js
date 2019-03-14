var mongoose = require('mongoose'),
    Article = require('../models/article'),
    api = require('../api/api');

function seedDB(){
  Article.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("All articles deleted!");

    //Add new articles.
    api.getNews(function (response){
      for (var i = 0; i < response.length; i++){
        Article.create(response[i], function(err, createdArticle){
          if(err){
            console.log(err);
          }
          else{
            console.log(createdArticle);
          }
        });
      }
    });
  });
}
module.exports = seedDB;
