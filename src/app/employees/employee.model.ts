import { EmployeeRole } from "./employee-role.model"

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public role: EmployeeRole,
  ) {
  }

  eq(other?: Employee) {
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
