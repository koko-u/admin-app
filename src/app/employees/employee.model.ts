export class Employee {
  constructor(
    public id: number,
    public name: string,
  ) {
  }

  eq(other?: Employee) {
    if (!other) {
      return false;
    }
    return this.id === other.id &&
           this.name === other.name;
  }
}
