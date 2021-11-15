import { Component, Input, OnInit } from "@angular/core"
import { Employee } from "../employee.model"

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  @Input()
  employee?: Employee

  constructor() {
    this.employee = undefined;
  }

  ngOnInit(): void {
  }

}
