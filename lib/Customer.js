class Customer {
  constructor(name){
    this.name = name;
    this.productsPurchased = [];
    this.amountSpent = 0;
  }

  buyProduct(store, product){
      const thisProduct = store.inventory.filter( item => {
        return item.name === product;
      });
      console.log(thisProduct);
      this.productsPurchased.push(thisProduct[0]);
      thisProduct[0].reduceQty();
      this.amountSpent += thisProduct[0].price;
  }
}

module.exports = Customer;