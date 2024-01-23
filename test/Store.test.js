const Product = require("../lib/Product")
const Store = require("../lib/Store")

describe("Store", () => {
  describe("Instantiation", () => {
    it("should instantiate correctly", () => {
      // TODO: make sure an object is instantiated
      const myLittleStore = new Store('My Little Store', 9, 3, [{name: "Apples"}]);
      expect(myLittleStore).toBeInstanceOf(Store);
    })
  })

  describe("Name property", () => {
    it("should set the name property correctly", () => {
      // TODO (see "it" statement )
      const myLittleStore = new Store('My Little Store', 9, 3, [{name: "Apples"}]);
      expect(myLittleStore.name).toEqual('My Little Store');
    })
  })

  describe("Add product to inventory", () => {
    it("should add a product to inventory correctly", () => {
      // TODO (see "it" statement )
      const product = {name: "oranges"};
      const myLittleStore = new Store('My Little Store', 9, 3, [{name: "Apples"}]);
      myLittleStore.addProduct(product);
      expect(myLittleStore.inventory).toContain(product);
    })
  })
})