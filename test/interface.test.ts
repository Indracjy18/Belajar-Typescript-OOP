describe("Interface", () => {
  interface hasName {
    name: string;
  }

  interface canSayHello {
    sayHello(name: string): void;
  }

  //membuat class yang mengikuti kontrak dari hasName and sayHello
  class Person implements hasName, canSayHello {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.log(`Hello ${name},my name is ${this.name}`);
    }
  }

  it("should support inteface in inheritance", () => {
    const person = new Person("indra");
    person.sayHello("Yosua");
  });
});
