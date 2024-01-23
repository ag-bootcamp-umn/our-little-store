const Customer = require("../lib/Customer")
const Store = require("../lib/Store")
const Product = require("../lib/Product")

describe("Customer", () => {
  describe("Instantiation", () => {
    it("should instantiate correctly", () => {

      // TODO: make sure an object is instantiated
    })
  })

  describe("buyProduct", () => {
    it("should handle a product purchase correctly", () => {
      const store = new Store("Dizzy Store", 8, 12);
      const product = new Product("Widget", 22, 50);
      const customer = new Customer("John Doe");
      
      // Hint: you will want to "expect" multiple different things here
    })
  })
})