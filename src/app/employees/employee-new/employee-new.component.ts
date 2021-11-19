import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { EmployeeService } from "../employee.service"
import { EmployeeRole, Roles } from "../employee-role.model"

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

  name: string
  roles: EmployeeRole[];
  selectedRole: EmployeeRole;

  @Output()
  added: EventEmitter<void>;

  constructor(
    private employeeService: EmployeeService,
  ) {
    this.name = ''
    this.roles = [...Roles]
    this.selectedRole = 'Staff'
    this.added = new EventEmitter<void>()
  }

  ngOnInit(): void {
  }

  add() {
    if (!this.name) return;

    this.employeeService.create({
      name: this.name,
      role: this.selectedRole ?? 'Staff'
    }).subscribe({
      complete: () => {
        this.name = ''
        this.added.emit();
      }
    });
  }
}
