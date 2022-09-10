import { Department } from "./Department";

export class ITDepartment extends Department {
  public admins: string[];

  constructor(id: number, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  override describe() {
    console.log("IT Department - ID: " + this.id);
  }
}
