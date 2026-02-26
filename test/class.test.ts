describe("Class", () => {
  class Customer {
    constructor() {}
  }

  class Order {}

  it("Should can create class in typescript", function () {
    const customer = new Customer();
    const order = new Order();
  });

  it("Should can create constructor class in typescript", function () {
    new Customer();
    new Customer();
  });
});
