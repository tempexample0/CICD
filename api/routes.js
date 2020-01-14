'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/addition/:number1/:number2')
       .get(controller.getAddition);
};