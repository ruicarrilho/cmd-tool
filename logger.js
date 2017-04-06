var util = require('./util');

module.exports = function logger(cart, total) {
  cart.map(function(item) {
    console.log('');
    console.log('Product: ' + item.name +
      ' Qty: '+ item.quantity + ' * ' + 
      util.formatDec(item.unitPrice) + ' = ' + 
      util.formatDec(item.price) +
      (item.promoCount > 0 ? ' (3 for 2 promotion applied ' + item.promoCount + ' times)'  : ''));
  });
  console.log('');
  console.log('--------------------------------------------------------');
  console.log('TOTAL:                          ' + util.formatDec(total));
}