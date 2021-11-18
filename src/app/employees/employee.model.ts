import { EmployeeRole } from "./employee-role.model"
import { IEmployee } from "./employee.interface"

export class Employee implements IEmployee {
  public id: number;
  public name: string;
  public role: EmployeeRole;

  constructor(obj: IEmployee) {
    this.id = obj.id
    this.name = obj.name
    this.role = obj.role
  }

  eq(other?: IEmployee) {
    if (!other) {
      return false;
    }
    return this.id === other.id &&
           this.name === other.name;
  }

  toString(): string {
    return `Employee[id=${this.id}, name=${this.name}, role=${this.role}]`
  }
}
