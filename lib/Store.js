const inquirer = require("inquirer")


class Store {
  constructor(name, opens, closes, inventory = []){
    this.name = name;
    this.opens = opens;
    this.closes = closes;
    this.inventory = inventory;
    this.shoppersClub = [];
  }

  async displayWelcome(){
    const sale = await inquirer.prompt([
      {
        type: 'list',
        message: 'Welcome! What would you like to buy?',
        name: 'purchase',
        choices: this.inventory,
      },
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
      }
    ])
    return sale;
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
}

module.exports = Store;