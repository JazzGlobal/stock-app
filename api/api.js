var request = require('request');

const api =
  {
    getNews(callback){
      var data = '';
      request('https://api.iextrading.com/1.0/stock/market/news/last/5', function(error, response, body){
        if(!error && response.statusCode == 200){
          data = JSON.parse(body);
          callback(data);
        }
      });
    },

    getCompanyReferenceData(callback){
      var data = '';
      request('https://api.iextrading.com/1.0/ref-data/symbols', function(error, response, body){
        if(!error && response.statusCode == 200){
          data = JSON.parse(body);
          callback(data);
        }
      });
    },

    getCompany(symbol, callback){
      var data = '';
      request(`https://api.iextrading.com/1.0/stock/${symbol}/company`, function(error, response, body){
        if(!error && response.statusCode == 200){
          data = JSON.parse(body);
          callback(data);
        }
      });
    }
  }
module.exports = api;
