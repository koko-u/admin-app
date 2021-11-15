import { Injectable } from '@angular/core';
import { EmployeesModule } from "./employees.module"
import { Observable, of } from "rxjs"
import { Employee } from "./employee.model"
import { employees } from "./mock/employees"

@Injectable({
  providedIn: EmployeesModule
})
export class EmployeeService {

  constructor() { }

  getEmployeeList(): Observable<Employee[]> {
    return of(employees)
  }
}
