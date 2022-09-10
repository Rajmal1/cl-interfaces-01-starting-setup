import { Department } from "./Department";

export class AccoutingDepartment extends Department {
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
