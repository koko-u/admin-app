import { EmployeeRole } from "./employee-role.model"

export interface IEmployee {
  id: number;
  name: string;
  role: EmployeeRole;
}
