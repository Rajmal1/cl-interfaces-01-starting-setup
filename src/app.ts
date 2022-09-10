class Department {
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: number, public name: string) {}

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accouting = new Department(1, "Accounting");

accouting.addEmployee("Max");
accouting.addEmployee("Manu");
// accouting.employees[2] = 'Anna';

console.log(accouting);

accouting.describe();
accouting.printEmployeeInfo();

// const accoutingCopy = { name: "DUMMY", describe: accouting.describe };

// accoutingCopy.describe();
