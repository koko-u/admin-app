import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations/operations.component';

@NgModule({
  declarations: [
    OperationsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OperationsComponent,
  ],
  providers: [
  ]
})
export class OperationLogsModule { }
