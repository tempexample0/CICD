var request = require('request');

var addition = {

    find: function(req, res, next) {
        var result = parseInt(req.params.number1) + parseInt(req.params.number2);
        reddition Results: '+req.params.number1+' (+) '+req.params.number2+' = '+result);
   }
};

module.exports = addition;