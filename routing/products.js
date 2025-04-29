const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const productsController = require('../controllers/productsController');

router.get('/products/new', productsController.getProducts);
router.post('/add', cartController.addProductToCart);

module.exports = router;
