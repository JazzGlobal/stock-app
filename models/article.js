var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  headline: String,
  summary: String,
  url: String,
  datetime: String
});
module.exports = mongoose.model("Article", articleSchema);
