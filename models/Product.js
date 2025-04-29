class Product {
  static #products = [];

  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  static add(product) {
    this.#products.push(product);
  }

  static getAll() {
    return [...this.#products];
  }

  static findByName(name) {
    return this.#products.find(product => product.name === name);
  }
}

module.exports = Product;
