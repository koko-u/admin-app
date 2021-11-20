import { Component, Input, OnInit } from "@angular/core"
import { Employee } from "../../employee.model"

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {

  @Input()
  employee?: Employee

  constructor() { }

  ngOnInit(): void {
  }

  delete(employee: Employee) {
    console.log(`delete ${employee}`)
  }
}
