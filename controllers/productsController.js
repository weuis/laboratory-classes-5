const Product = require('../models/Product');
const Cart = require('../models/cart');

exports.getProducts = (req, res) => {
  res.render('products', {
    products: Product.getAll(),
    cartCount: Cart.getProductsQuantity()
  });
};
