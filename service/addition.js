var request = require('request');
var addFunction = require('./../math_functions/addFunction');
var fs = require('fs');

var addition = {
    find: function(req, res, next) {
        //var result = parseInt(req.params.number1) + parseInt(req.params.number2);
        var result = addFunction.add(req.params.number1, req.params.number2);
        res.send('Addition Results: '+req.params.number1+' (+) '+req.params.number2+' = '+result);
    }
};

/*
function add(n1, n2){
    return parseInt(n1) + parseInt(n2) + 1;
}*/

//module.exports = addHelp;
module.exports = addition;


