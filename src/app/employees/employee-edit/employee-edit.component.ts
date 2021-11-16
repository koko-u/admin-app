import { Component, Input, OnInit } from "@angular/core"
import { Employee } from "../employee.model"
import { ActivatedRoute } from "@angular/router"
import { EmployeeService } from "../employee.service"
import { Location } from "@angular/common"
import { map, mergeMap, of } from "rxjs"

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  @Input()
  employee?: Employee

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
  ) {
    this.employee = undefined;
  }

  ngOnInit(): void {
    this.fetchEmployee();
  }

  fetchEmployee(): void {
    this.route.paramMap
      .pipe(map(param => param.get('id')))
      .pipe(mergeMap(id => id ? this.employeeService.getEmployeeById(id) : of(undefined)))
      .subscribe(employee => this.employee = employee)
  }

  goBack(): void {
    this.location.back()
  }
}
