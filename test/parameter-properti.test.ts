describe("Parameter Properties", () => {
  class Person {
    //shortcut langsung deklarasi di construcnya
    constructor(public nama: string) {}
  }

  it("should support Parameter Properties ", () => {
    const person = new Person("ANDREAN");
    console.log(person);
    ("");
    person.nama = "Komeng";
    console.log(person);
  });
});
