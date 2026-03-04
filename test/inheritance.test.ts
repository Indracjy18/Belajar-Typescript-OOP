describe("Inheritance/pewarisan", () => {
  //extend turunan dari sebuah class
  //name tanpa this itu adalah tamu
  class Employee {
    name: string;
    division: string;

    constructor(name: string, division: string) {
      this.name = name;
      this.division = division;
    }
    sayHello(name: string) {
      console.log(
        `hello ${name}, my name is ${this.name}, aku dari ${this.division}`,
      );
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should support", () => {
    const employee = new Employee("indra", "Office");
    employee.sayHello("Wahid");
    console.log(employee);
    const manager = new Manager("Bayu", "Teknisi");
    console.log(manager);
    const director = new Director("Yosua", "NAC");
    console.log(director);
  });
});
