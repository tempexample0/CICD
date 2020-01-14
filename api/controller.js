'use strict';

var properties = require('../package.json')
var addition = require('../service/addition');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getAddition: function(req, res) {
           addition.find(req, res, function(err, add) {
               if (err)
                   res.send(err);
               res.json(add);
           });
       },
};

module.exports = controllers;