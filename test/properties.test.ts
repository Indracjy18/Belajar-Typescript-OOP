describe("Properties", () => {
  class Customer {
    //readonly tidak bisa diubah
    readonly id: number;
    name: string;
    //contoh default value
    alamat: string = "JAKARTA TIMUR";
    age?: number;

    constructor(id: number, name: string) {
      //this untuk mengakses properti di class

      this.id = id;
      this.name = name;
    }

    //method sayHello
    sayHello(name: string): void {
      console.log(`Hello ${name},my name is ${this.name}`);
    }
  }
  it("Should can have Properties", function () {
    const customer = new Customer(1, "indra Cahya Jati");
    customer.age = 20;
    console.log(customer.id);
    console.log(customer.name);
    console.log(customer.age);
  });

  it("should can have method", () => {
    const customer = new Customer(1, "Yasri");
    customer.age = 35;
    customer.sayHello("Yosua");
    console.log(customer);
  });
});
