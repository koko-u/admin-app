import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee.model"

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;

  constructor() {
    this.employee = new Employee(1, '田中 次郎');
  }

  ngOnInit(): void {
  }

}
