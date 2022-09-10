class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const accouting = new Department("Accounting");

console.log(accouting);
