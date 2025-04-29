const Product = require('../models/Product');
const Cart = require('../models/cart');

exports.addProductToCart = (req, res) => {
    const { name, description, price } = req.body;

    const product = new Product(name, description, parseFloat(price));
    Product.add(product);
    Cart.add(name);

    res.redirect('/products/new');
};

exports.getProductsCount = (req, res) => {
    res.json({ count: Cart.getProductsQuantity() });
};
