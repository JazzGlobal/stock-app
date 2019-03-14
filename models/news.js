var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: String,
  summary: String,
  date: String
});
module.exports = mongoose.model("Article", articleSchema); 
