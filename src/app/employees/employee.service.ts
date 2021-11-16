import { Injectable } from "@angular/core"
import { Observable, of, tap } from "rxjs"
import { Employee } from "./employee.model"
import { OperationService } from "../operation-logs/operation.service"
import { EmployeeRole } from "./employee-role.model"
import { Fetch, Filter, Init } from "../operation-logs/operation-type.model"
import { HttpClient } from "@angular/common/http"

@Injectable()
export class EmployeeService {

  private employeesEndpoint = 'api/employees'

  constructor(
    private operationService: OperationService,
    private httpClient: HttpClient,
  ) { }

  getEmployeeList(): Observable<Employee[]> {
    this.operationService.add(Init, `${this.constructor.name} - get all employees.`)
    return this.httpClient.get<Employee[]>(this.employeesEndpoint)
  }

  getEmployeeListByRole(role: EmployeeRole): Observable<Employee[]> {
    this.operationService.add(Filter, `${this.constructor.name} - filter employees by role=${role}.`)
    return this.httpClient.get<Employee[]>(this.employeesEndpoint, { params: { role }})
  }

  getEmployeeById(id: string): Observable<Employee | undefined> {
    const n = parseInt(id);
    if (Number.isNaN(n)) {
      return of(undefined);
    }
    return this.httpClient.get<Employee>(`${this.employeesEndpoint}/${id}`)
      .pipe(tap(employee => this.operationService.add(Fetch,`${this.constructor.name} - get ${employee}`)))
  }
}
