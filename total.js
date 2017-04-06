module.exports = function total(cart) {
  return cart.reduce(function(sum, cartItem) {
    return sum + cartItem.price;
  }, 0);
}