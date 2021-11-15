import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesModule } from "./employees/employees.module"
import { OperationLogsModule } from "./operation-logs/operation-logs.module"
import { AppRoutingModule } from "./app-routing.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    OperationLogsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
