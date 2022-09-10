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
  private lastReport: string;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: number, private reports: string[]) {
    super(id, "Accouting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

accouting.mostRecentReport = "Year End Report";
accouting.addReport("Something went wrong...");
console.log(accouting.mostRecentReport);

accouting.addEmployee("Max");
accouting.addEmployee("Manu");

accouting.printReports();
accouting.printEmployeeInfo();
