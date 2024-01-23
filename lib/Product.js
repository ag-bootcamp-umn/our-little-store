class Product {
  constructor(name, price, qty){
    this.name = name;
    this.price = price;
    this.qty = qty;
  }

  reduceQty(){
    if (this.qty > 0) {
      this.qty -= 1; // Decrease the product's quantity by 1 if it's more than 0.
  }
  }

  givePrice(){
    return this.price;
  }
}

module.exports = Product;