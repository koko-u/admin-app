import { Injectable } from "@angular/core"
import { catchError, EMPTY, Observable, of, tap } from "rxjs"
import { Employee } from "./employee.model"
import { OperationService } from "../operation-logs/operation.service"
import { EmployeeRole } from "./employee-role.model"
import { Fetch, Filter, Init, Error } from "../operation-logs/operation-type.model"
import { HttpClient, HttpErrorResponse } from "@angular/common/http"

@Injectable()
export class EmployeeService {

  private employeesEndpoint = 'api/employees'

  constructor(
    private operationService: OperationService,
    private httpClient: HttpClient,
  ) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.employeesEndpoint)
      .pipe(
        tap(employees => {
          this.operationService.add(Init, `${this.constructor.name} - get all employees.`)
        }),
        catchError(this.handleError('getEmployeeList'))
      )
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
      .pipe(
        tap(employee => {
          this.operationService.add(Fetch,`${this.constructor.name} - get ${employee}`)
        }),
        catchError(this.handleError('getEmployeeId'))
      )
  }

  private handleError(methodName: string) {

    return (err: any): Observable<never> => {
      this.operationService.add(Error, `${this.constructor.name}#${methodName} - ${err.body.error}`)
      return EMPTY
    }
  }
}
