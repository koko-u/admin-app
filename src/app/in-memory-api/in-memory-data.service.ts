import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api"
import { Observable, of } from "rxjs"
import { Employee } from "../employees/employee.model"

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(reqInfo?:RequestInfo): Observable<{ employees: Employee[] }> {
    const employees = [
      new Employee(11, '武山 岳大', 'Executive'),
      new Employee(12, '駒倉 光紀', 'Executive'),
      new Employee(13, '長田 研太', 'Manager'),
      new Employee(14, '高藤 友梨香', 'Manager'),
      new Employee(15, '浜崎 貴之', 'Staff'),
      new Employee(16, '緑川 睦', 'Staff'),
      new Employee(17, '森谷 怜奈', 'Executive'),
      new Employee(18, '大槻 祐大', 'Staff'),
      new Employee(19, '岩野 紀之', 'Staff'),
      new Employee(20, '佐々木 小次郎', 'Executive')
    ];
    return of({ employees });
  }
}
