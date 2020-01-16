//import { result } from '../service/addition'
//import {add} from './../service/addition.js';
//var addHelp = require('./../service/addHelp')
var addition = require('./../service/addition');
var addFunction = require('./../math_functions/addFunction');

var assert = require('assert');
describe('Testing', function() {
  describe('Addition', function() {
    it('Test Case 1: 2 + 3 = 5', function(){
      assert.equal(addFunction.add(2, 3), 5);
    });
  });
});