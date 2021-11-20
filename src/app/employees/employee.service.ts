import { Injectable } from "@angular/core"
import { catchError, EMPTY, ignoreElements, map, Observable, tap, throwError } from "rxjs"
import { Employee } from "./employee.model"
import { OperationService } from "../operation-logs/operation.service"
import { EmployeeRole } from "./employee-role.model"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { IEmployee } from "./employee.interface"

@Injectable()
export class EmployeeService {

  private employeesEndpoint = 'api/employees'

  constructor(
    private operationService: OperationService,
    private httpClient: HttpClient,
  ) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<IEmployee[]>(this.employeesEndpoint)
      .pipe(
        map(objs => objs.map(obj => new Employee(obj))),
        tap(employees => {
          this.operationService.add('Fetch', `${this.constructor.name} - get all employees.`)
        }),
        catchError(this.handleError('getEmployeeList'))
      )
  }

  getEmployeeListByRole(role: EmployeeRole): Observable<Employee[]> {

    return this.httpClient.get<IEmployee[]>(this.employeesEndpoint, { params: { role }})
      .pipe(
        map(objs => objs.map(obj => new Employee(obj))),
        tap(employees => {
          this.operationService.add('Filter', `${this.constructor.name} - filter employees by role=${role}.`)
        }),
        catchError(this.handleError('getEmployeeListByRole'))
      )
  }

  getEmployeeById(id: string): Observable<Employee> {
    const n = parseInt(id);
    if (Number.isNaN(n)) {
      return throwError(() => `parameter id=${id} is not a number`)
    }

    return this.httpClient.get<IEmployee>(`${this.employeesEndpoint}/${id}`).pipe(
        map(obj => new Employee(obj)),
        tap(employee => {
          this.operationService.add('Fetch',`${this.constructor.name} - get ${employee}`)
        }),
        catchError(this.handleError('getEmployeeId'))
    )
  }

  create(data: { name: string, role: EmployeeRole }): Observable<void> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.httpClient.post<IEmployee>(this.employeesEndpoint, data, { headers })
      .pipe(
        map(created => new Employee(created)),
        tap(employee => {
          this.operationService.add('Create', `${this.constructor.name} - create ${employee}`)
        }),
        ignoreElements(),
        catchError(this.handleError('create'))
      )
  }

  update(employee: Employee): Observable<void> {
    const headers = { 'Content-Type': 'application/json' };

    return this.httpClient.put(`${this.employeesEndpoint}`, employee, { headers })
      .pipe(
        tap(() => {
          this.operationService.add('Update', `${this.constructor.name} - update ${employee}`)
        }),
        ignoreElements(),
        catchError(this.handleError('update'))
      )
  }

  delete(employee: Employee): Observable<void> {

    return this.httpClient.delete<void>(`${this.employeesEndpoint}/${employee.id}`)
      .pipe(
        tap(() => {
          this.operationService.add('Delete', `${this.constructor.name} - delete ${employee}`)
        }),
        ignoreElements(),
        catchError(this.handleError('delete'))
      )
  }

  private handleError(methodName: string) {

    return (err: any): Observable<never> => {
      console.log({ handleError: err })
      console.log(this);
      this.operationService.add('Error', `${this.constructor.name}#${methodName} - ${err}`)
      return EMPTY
    }
  }
}
