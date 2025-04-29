const Cart = require('../models/cart');

exports.getHomeView = (req, res) => {
  res.render('home', {
    cartCount: Cart.getProductsQuantity()
  });
};
