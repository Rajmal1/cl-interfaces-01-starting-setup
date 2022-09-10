class Department {
  // public name: string;
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  public admins: string[];

  constructor(id: number, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccoutingDepartment extends Department {
  constructor(id: number, private reports: string[]) {
    super(id, "Accouting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  override addEmployee(name: string) {
    if (name === "Max") {
      return;
    }

    this.employees.push(name);
  }
}

const it = new ITDepartment(1, ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");
// accouting.employees[2] = 'Anna';

console.log(it);

it.describe();
it.printEmployeeInfo();

// const accoutingCopy = { name: "DUMMY", describe: accouting.describe };

// accoutingCopy.describe();

const accouting = new AccoutingDepartment(2, []);

console.log(accouting);

accouting.addReport("Something went wrong...");

accouting.addEmployee("Max");
accouting.addEmployee("Manu");

accouting.printReports();
accouting.printEmployeeInfo();
