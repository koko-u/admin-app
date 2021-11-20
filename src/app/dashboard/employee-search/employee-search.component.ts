import { Component, OnInit } from '@angular/core';
import { FormControl } from "ngx-typesafe-forms"
import { concatMap, debounce, debounceTime, distinctUntilChanged, Observable, of, switchMap } from "rxjs"
import { EmployeeService } from "../../employees/employee.service"
import { Employee } from "../../employees/employee.model"


@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {

  name = new FormControl<string>('')
  results$: Observable<Employee[]> = of([])

  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.results$ = this.name.value$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(name => this.employeeService.getEmployeeListByName(name))
      )
  }
}
