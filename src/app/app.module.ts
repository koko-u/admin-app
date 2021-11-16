import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesModule } from "./employees/employees.module"
import { OperationLogsModule } from "./operation-logs/operation-logs.module"
import { AppRoutingModule } from "./app-routing.module";
import { DashboardModule } from './dashboard/dashboard.module';
import { InMemoryApiModule } from './in-memory-api/in-memory-api.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    OperationLogsModule,
    DashboardModule,
    InMemoryApiModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
