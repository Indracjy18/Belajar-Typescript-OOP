describe("Polymorphism", () => {
  class Employee {
    constructor(public nama: string) {}
  }

  class Manager extends Employee {}

  class vicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    console.log(`hello ${employee.nama} apakabar ?`);
  }

  it("should support Polymorphism in oop", () => {
    let employee = new Employee("indra");
    console.info(employee);

    employee = new Manager("Dani");
    console.log(employee);

    employee = new vicePresident("Yanwar");
    console.log(employee);
  });
  it("should support method parameter polymorphism", () => {
    //cara menggunakanya
    sayHello(new Employee("Indra"));
    sayHello(new Manager("Indra"));
    sayHello(new vicePresident("Indra"));
  });
});
