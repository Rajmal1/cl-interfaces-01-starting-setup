import { Department } from "./classes/Department";
import { AccoutingDepartment } from "./classes/AccoutingDepartment";
import { ITDepartment } from "./classes/ITDepartment";

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
