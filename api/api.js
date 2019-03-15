var request = require('request');

const api =
  {
    getNews(callback){
      request('https://api.iextrading.com/1.0/stock/market/news/last/5', function(error, response, body){
        if(!error && response.statusCode == 200){
          var data = JSON.parse(body);
          callback(data);
        }
      });
    },

    getCompany(symbol, callback){
      request(`https://api.iextrading.com/1.0/stock/${symbol}/batch?types=quote,news,company`, function(error, response, body){
        if(!error && response.statusCode == 200){
          var data = JSON.parse(body);
          callback(data);
        }
      });
    }
  }
module.exports = api;
