abstract class Department {
  static fiscalYear = 2022;
  // public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: number, public name: string) {
    // console.log(Department.fiscalYear);
  }

  abstract describe(this: Department): void;

  static createEmproyee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccoutingDepartment extends Department {
  private lastReport: string;
  private static instante: AccoutingDepartment;
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

  private constructor(id: number, private reports: string[]) {
    super(id, "Accouting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccoutingDepartment.instante) {
      return this.instante;
    }

    this.instante = new AccoutingDepartment(2, []);
    return this.instante;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  override describe() {
    console.log("Accouting Department - ID: " + this.id);
  }

  override addEmployee(name: string) {
    if (name === "Max") {
      return;
    }

    this.employees.push(name);
  }
}

class ITDepartment extends Department {
  public admins: string[];

  constructor(id: number, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  override describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

const employee1 = Department.createEmproyee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment(1, ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");
// accouting.employees[2] = 'Anna';

console.log(it);

it.describe();
it.printEmployeeInfo();

// const accoutingCopy = { name: "DUMMY", describe: accouting.describe };

// accoutingCopy.describe();

const accouting = AccoutingDepartment.getInstance();

console.log(accouting);

accouting.mostRecentReport = "Year End Report";
accouting.addReport("Something went wrong...");
console.log(accouting.mostRecentReport);

accouting.addEmployee("Max");
accouting.addEmployee("Manu");

// accouting.printReports();
// accouting.printEmployeeInfo();

it.describe();
accouting.describe();
