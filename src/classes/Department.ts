export abstract class Department {
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
