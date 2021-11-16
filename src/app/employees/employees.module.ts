import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeService } from "./employee.service"
import { AppRoutingModule } from "../app-routing.module"

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    EmployeeListComponent,
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeesModule { }
