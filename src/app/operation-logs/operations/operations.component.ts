import { Component, OnInit } from '@angular/core';
import { OperationService } from "../operation.service"

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  get isEmpty(): boolean {
    return this.operationService.operations.length === 0;
  }

  constructor(
    public operationService: OperationService,
  ) { }

  ngOnInit(): void {
  }

  clearLogs() {
    this.operationService.clear();
  }
}
