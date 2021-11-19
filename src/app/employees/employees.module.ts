import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from "../app-routing.module"
import { HttpClientModule } from "@angular/common/http";
import { NgxTrimDirectiveModule } from "ngx-trim-directive"

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeService } from "./employee.service"
import { EmployeeNewComponent } from './employee-new/employee-new.component'

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxTrimDirectiveModule,
  ],
  exports: [
    EmployeeListComponent,
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeesModule { }
