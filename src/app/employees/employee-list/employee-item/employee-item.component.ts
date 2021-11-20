import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { Employee } from "../../employee.model"
import { EmployeeService } from "../../employee.service"

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {

  @Input()
  employee?: Employee

  @Output()
  deleted: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
  }

  delete() {
    if (!this.employee) return;

    this.employeeService.delete(this.employee)
      .subscribe({
        complete: () => this.deleted.emit()
      })
  }
}
