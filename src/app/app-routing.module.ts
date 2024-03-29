import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import type { Routes } from "@angular/router"
import { EmployeeListComponent } from "./employees/employee-list/employee-list.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { EmployeeEditComponent } from "./employees/employee-edit/employee-edit.component"

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:id', component: EmployeeEditComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
