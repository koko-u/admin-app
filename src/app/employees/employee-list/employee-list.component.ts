import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee.model"
import { EmployeeService } from "../employee.service"

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];

  constructor(
    private employeeService: EmployeeService,
  ) {
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.fetchEmployeeList();
  }

  onEmployeeAdded() {
    this.fetchEmployeeList();
  }

  private fetchEmployeeList(): void {
    this.employeeService
      .getEmployeeList()
      .subscribe(employees => this.employeeList = employees);
  }
}
