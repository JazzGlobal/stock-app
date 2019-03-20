var request = require('request'),
    XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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
        try{
          if(body == 'Unknown symbol'){
            throw 'Unknown Symbol'
          }
          else if(!error && response.statusCode == 200){
            console.log('Success: ' + symbol);
            var data = JSON.parse(body);
            callback(data, true);
          }
        }
        catch(err){
          console.log(err);
          callback('', false);
        }
      });
    }
//Add more functions here.
  }
module.exports = api;
