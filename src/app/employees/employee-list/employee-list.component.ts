import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee.model"
import { EmployeeService } from "../employee.service"
import { OperationService } from "../../operation-logs/operation.service"

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  selectedEmployee?: Employee;
  employeeList: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private operationService: OperationService,
  ) {
    this.selectedEmployee = undefined;
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.fetchEmployeeList();
  }

  fetchEmployeeList(): void {
    this.employeeService
      .getEmployeeList()
      .subscribe(employees => this.employeeList = employees);
  }

  onSelect(employee: Employee) {
    this.operationService.add('Select', `${this.constructor.name} - ${employee}`)
    this.selectedEmployee = employee;
  }
}
