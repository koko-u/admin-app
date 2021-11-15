import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs"
import { Employee } from "./employee.model"
import { employees } from "./mock/employees"
import { OperationService } from "../operation-logs/operation.service"

@Injectable()
export class EmployeeService {

  constructor(
    private operationService: OperationService,
  ) { }

  getEmployeeList(): Observable<Employee[]> {
    this.operationService.add('Init', `${this.constructor.name} - get all employees.`)
    return of(employees)
  }
}
