describe("Instance Of", () => {
  // Instance of outpunya true or false
  class Employee {}
  class Manager {}
  it("should saupport instance of", () => {
    const indra = new Employee();
    const dani = new Manager();

    // expect(indra instanceof Employee).toBe(true);
    // expect(indra instanceof Manager).toBe(false);

    // expect(dani instanceof Employee).toBe(false);
    // expect(dani instanceof Manager).toBe(true);

    console.log(indra instanceof Employee);
    console.log(dani instanceof Manager);
  });
});
