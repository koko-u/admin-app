import { Injectable } from '@angular/core';
import { Operation } from "./operation.model"
import { OperationType } from "./operation-type.model"

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  public operations: Operation[]

  constructor() {
    this.operations = [];
  }

  add(type: OperationType, log?: string): void {
    this.operations.push(
      new Operation(type, log)
    )
  }

  clear(): void {
    this.operations = [];
  }
}
