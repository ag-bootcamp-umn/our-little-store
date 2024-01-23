class Customer {
  constructor(name){
    this.name = name;
    this.productsPurchased = [];
    this.amountSpent = 0;
  }

  buyProduct(store, product){
    if (store.inventory.includes(product) && product.qty > 0) {
      this.productsPurchased.push(product);
      product.reduceQty();
      this.amountSpent += product.price;
    } else {
      console.log(`Product not available or out of stock.`);
    }
  }
}

module.exports = Customer;