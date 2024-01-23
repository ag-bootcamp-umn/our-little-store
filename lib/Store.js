class Store {
  constructor(name, opens, closes, inventory){
    this.name = name;
    this.opens = opens;
    this.closes = closes;
    this.inventory = inventory;
    this.shoppersClub = [];
  }

  displayWelcome(){
    console.log(`Welcome to ${this.name}`);
  }

  areYouOpen(hour){
    if (hour >= this.opens && hour <= this.closes) {
      return true;
    } else {
      return false;
    }
  }

  addProduct(prod){
    this.inventory.push(prod);
  }

  addShopper(shopper){
    this.shoppersClub.push(shopper);
  }

  // checkInventory(prodName) {
  //   return this.inventory.filter( inv => {
  //     return inv.name = prodName;
  //   });
  // }
}


module.exports = Store;