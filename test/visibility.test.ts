describe("Visibility", () => {
  //public = bisa diakses kemanapun
  //private=hanya bisa diakses classnya sendiri
  //protecd= sama kaya private,tpi bisa diakses oleh class turunanya

  class Counter {
    protected counter: number = 0;

    public increment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  class doubleCounter extends Counter {
    //overriding
    public increment(): void {
      this.counter += 2;
    }
  }

  it("should support PRIVATE in Visibility", () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();

    console.log(counter.getCounter());
  });
  it("should support PROTECTED in Visibility", () => {
    const doubblecounter = new doubleCounter();
    doubblecounter.increment();
    doubblecounter.increment();
    doubblecounter.increment();

    console.log(doubblecounter.getCounter());
  });
});
