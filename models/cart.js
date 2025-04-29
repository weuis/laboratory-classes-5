const Product = require('./Product');

class Cart {
    static #items = [];

    static add(productName) {
        const product = Product.findByName(productName);
        if (!product) {
            throw new Error('Produkt nie istnieje');
        }

        const existingItem = this.#items.find(item => item.product.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.#items.push({ product, quantity: 1 });
        }
    }

    static getItems() {
        return [...this.#items];
    }

    static getTotalPrice() {
        return this.#items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    static getProductsQuantity() {
        return this.#items.reduce((total, item) => total + item.quantity, 0);
    }

    static clearCart() {
        this.#items = [];
    }
}

module.exports = Cart;
