import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from "../app-routing.module";
import { EmployeeSearchComponent } from './employee-search/employee-search.component'



@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeSearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
