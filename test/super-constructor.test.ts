describe("Super Constructor", () => {
  class Karyawan {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Karyawan {
    department: string;
    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
    sayHello(name: string): void {
      console.log(
        `hello ${name} salam kenal yaa, aku ${this.name} dari department ${this.department}`,
      );
    }
  }

  it("should superConstructor", () => {
    const karyawan = new Karyawan("indra");
    console.log(karyawan);

    const employee = new Employee("indra", "Network Engineer");
    employee.sayHello("joko");
  });
});
