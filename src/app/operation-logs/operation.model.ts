import { OperationType } from "./operation-type.model"

export class Operation {
  private date: Date;

  constructor(
    public type: OperationType,
    public log?: string,
  ) {
    this.date = new Date();
  }

  toString(): string {
    if (this.log) {
      return `[${this.date.toLocaleString()}] ${this.type.toUpperCase()} | ${this.log}`
    } else {
      return `[${this.date.toLocaleString()}] ${this.type.toUpperCase()}`
    }
  }
}
