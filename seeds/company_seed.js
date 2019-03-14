var mongoose = require('mongoose'),
    Company = require('../models/company'),
    api = require('../api/api');

function seedDB(){
  //Remove all companies
  Company.remove({}, function(err){
    if(err){
      console.log(err)
    }
    console.log("All companies deleted!");

    //Add new companies.
    //Api call
    api.getCompanyReferenceData(function (response){
        for (var i = 0; i < response.length; i++){
          api.getCompany(response[i].symbol, function(response){
            Company.create(response, function(err, createdCompany){
              if(err){
                console.log(err);
              }
              else{
                console.log(createdCompany);
              }
            })
          });
        }
    });
  });
}

module.exports = seedDB;
