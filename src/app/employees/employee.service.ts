import { Injectable } from '@angular/core';
import { filter, first, map, Observable, of } from "rxjs"
import { Employee } from "./employee.model"
import { employees } from "./mock/employees"
import { OperationService } from "../operation-logs/operation.service"
import { EmployeeRole } from "./employee-role.model"
import { Fetch, Filter, Init } from "../operation-logs/operation-type.model"

@Injectable()
export class EmployeeService {

  constructor(
    private operationService: OperationService,
  ) { }

  getEmployeeList(): Observable<Employee[]> {
    this.operationService.add(Init, `${this.constructor.name} - get all employees.`)
    return of(employees)
  }

  getEmployeeListByRole(role: EmployeeRole): Observable<Employee[]> {
    this.operationService.add(Filter, `${this.constructor.name} - filter employees by role=${role}.`)
    return of(employees)
      .pipe(map(es => es.filter(e => e.role === role)));
  }

  getEmployeeById(id: string): Observable<Employee | undefined> {
    const n = parseInt(id);
    if (Number.isNaN(n)) {
      return of(undefined);
    }
    return of(employees)
      .pipe(map(es => {
        const employee = es.find(employee => employee.id === n);
        this.operationService.add(Fetch,`${this.constructor.name} - get ${employee}`)
        return employee;
      }))
  }
}
