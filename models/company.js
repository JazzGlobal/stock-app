var mongoose = require('mongoose');

var companySchema = mongoose.Schema({
  symbol: String,
  companyName: String,
  website: String,
  description: String,
  sector: String,
});
module.exports = mongoose.model("Company", companySchema);
