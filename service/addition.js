var request = require('request');

var addHelp = {
    add: function(n1, n2){
        return parseInt(n1) + parseInt(n2);
    }
}

var addition = {

    find: function(req, res, next) {
        var result = parseInt(req.params.number1) + parseInt(req.params.number2);
        //var result = add(req.params.number1, req.params.number2);
        res.send('Addition Results: '+req.params.number1+' (+) '+req.params.number2+' = '+result);
    },

    add: function(n1, n2){
        return parseInt(n1) + parseInt(n2);
    }
};

function add(n1, n2){
    return parseInt(n1) + parseInt(n2);
}

//module.exports = addHelp;
module.exports = addition;


