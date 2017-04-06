var validInput = require('./validator');
var cart = require('./cart-builder');
var total = require('./total');
var logger = require('./logger');

var args = process.argv.splice(2, process.argv.length);

var valid = validInput(args);
if (valid) {
  var myCart = cart(args);
  var sum = total(myCart);
  logger(myCart, sum);
}