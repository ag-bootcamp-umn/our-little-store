const Product = require("../lib/Product")

describe("Product", () => {
  describe("Instantiation", () => {
    it("should instantiate correctly", () => {
     
      // TODO: make sure an object is instantiated 
      const newProduct = new Product('comb', 300, 2);
      expect(newProduct).toBeInstanceOf(Product)
    })
  })

  describe("reduceQty method", () => {
    it("should reduce the qty correctly", () => {
      // TODO (see "it" statement )
      const newProduct = new Product('comb', 300, 2);
      newProduct.reduceQty();
      expect(newProduct.qty).toEqual(1);
    })
  })
})