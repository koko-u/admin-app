import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee.model"
import { of } from "rxjs"
import { employees } from "../mock/employees"

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  selectedEmployee?: Employee;
  employeeList: Employee[];

  constructor() {
    this.selectedEmployee = undefined;
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.fetchEmployeeList();
  }

  fetchEmployeeList(): void {
    of(employees)
      .subscribe(employees => this.employeeList = employees);
  }

  onSelect(employee: Employee) {
    this.selectedEmployee = employee;
  }
}
