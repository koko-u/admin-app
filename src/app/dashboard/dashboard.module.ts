import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

import { DashboardComponent } from './dashboard.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component'
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeSearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
