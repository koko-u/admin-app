import { Component, OnInit } from '@angular/core';
import { Employee } from "../employees/employee.model"
import { EmployeeService } from "../employees/employee.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  executives: Employee[];

  constructor(
    private employeeService: EmployeeService,
  ) {
    this.executives = [];
  }

  ngOnInit(): void {
    this.fetchExecutiveList();
  }

  fetchExecutiveList(): void {
    this.employeeService.getEmployeeListByRole('Executive')
      .subscribe(executives => this.executives = executives);
  }
}
