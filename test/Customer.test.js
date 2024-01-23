const Customer = require("../lib/Customer")
const Store = require("../lib/Store")
const Product = require("../lib/Product")

describe("Customer", () => {
  describe("Instantiation", () => {
    it("should instantiate correctly", () => {

      // TODO: make sure an object is instantiated
      const dizzy = new Customer('Dizzy');
      expect(dizzy).toBeInstanceOf(Customer);
    })
  })

  describe("buyProduct", () => {
    it("should handle a product purchase correctly", () => {
      const store = new Store("Dizzy Store", 8, 12, []);
      const product = new Product("Widget", 22, 50);
      const customer = new Customer("John Doe");
      
      // Hint: you will want to "expect" multiple different things here
      store.addProduct(product);
      store.addProduct(product);
      store.addProduct(product);
      customer.buyProduct(store, product);
      expect(customer.productsPurchased).toContain(product);
      expect(product.qty).toEqual(49);
      expect(customer.amountSpent).toEqual(22);
    })
  })
})