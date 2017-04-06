var printUsage = require('./usage');
var products = require('./products');
var util = require('./util');

module.exports = function validInput(args) {
  if (args.length == 0 || !util.isEven(args.length)) {
    printUsage();
    return false;
  } else {
    var hasErrors = false;
    args.map(function(arg, idx) {
      if (util.isEven(idx)) {
        if (!validProduct(arg)) {
          hasErrors = true;
          console.log('');
          console.log('Invalid product: ' + arg);
          console.log('');
        }
      } else {
        if (!validQuantity(arg)) {
          hasErrors = true;
          console.log('');
          console.log('Invalid quantity: ' + arg);
          console.log('');
        }
      }
    });
    if (hasErrors) {
      printUsage();
    }
  }
  return !hasErrors;
}

function validProduct(prod) {
  return products.filter(function(prd) { return prd.name == prod}).length > 0;
}

function validQuantity(qty) {
  return !isNaN(qty);
}