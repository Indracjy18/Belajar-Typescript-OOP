describe("Method Overiding", () => {
  //Parent class
  class Person {
    nama: string;
    constructor(nama: string) {
      this.nama = nama;
    }
  }

  class Employee extends Person {
    departement: string;
    constructor(nama: string, departement: string) {
      super(nama);
      this.departement = departement;
    }
    sayHello(nama: string): void {
      console.log(
        `hello ${nama}, im ${this.nama} from department ${this.departement}`,
      );
    }
  }

  class Manager extends Employee {
    urmanager: string;
    constructor(nama: string, departement: string, urmanager: string) {
      super(nama, departement);
      this.urmanager = urmanager;
    }
    sayHello(nama: string): void {
      // super.sayHello(nama); // <- cara panggil parent method
      // console.log(`And i am also your manager, pak ${this.urmanager}`);
      console.log(
        `hello ${nama}, im ${this.nama} from department ${this.departement} and your  manager pak ${this.urmanager}`,
      );
    }
  }

  it("should support overiding in classs", () => {
    const employee = new Employee("Dita", "Finance");
    employee.sayHello("anis");

    const manager = new Manager("Yasri", "NAC", "INDRA");
    manager.sayHello("Samsul");
    console.log(manager);
  });
});
