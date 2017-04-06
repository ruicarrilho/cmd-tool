var products = require('./products');
var util = require('./util');

module.exports = function cart(args) {
  var cart = [];
  var existing;
  var qty;
  var price;
  var promoCount;

  args.map(function(arg, idx) {
    if (util.isEven(idx)) {
      existing = findProduct(arg);
    } else {
      qty = arg;
      price = computePrice(existing, qty);
      promoCount = promotionCount(existing, qty);
      cart.push({
        name: existing.name,
        unitPrice: existing.price,
        quantity: qty,
        price: price,
        promoCount: promoCount
      });
    }
  });

  return cart;
}

function findProduct(el) {
  return products.filter(function(prd) { return prd.name == el}).pop();
}

function computePrice(existing, qty) {
  var module = promotionCount(existing, qty);
  qty -= module;

  return qty * existing.price;
}

function promotionCount(existing, qty) {
  return existing.promotion ? Math.floor( qty / 3) : 0;
}