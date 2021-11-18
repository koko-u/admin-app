import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api"
import { Observable, of } from "rxjs"
import { IEmployee } from "../employees/employee.interface"

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(reqInfo?:RequestInfo): Observable<{ employees: IEmployee[] }> {
    const employees: IEmployee[] = [
      { id: 11, name: '武山 岳大', role: 'Executive' },
      { id: 12, name: '駒倉 光紀', role: 'Executive' },
      { id: 13, name: '長田 研太', role: 'Manager' },
      { id: 14, name: '高藤 友梨香', role: 'Manager' },
      { id: 15, name: '浜崎 貴之', role: 'Staff' },
      { id: 16, name: '緑川 睦', role: 'Staff' },
      { id: 17, name: '森谷 怜奈', role: 'Executive' },
      { id: 18, name: '大槻 祐大', role: 'Staff' },
      { id: 19, name: '岩野 紀之', role: 'Staff' },
      { id: 20, name: '佐々木 小次郎', role: 'Executive' }
    ];
    return of({ employees });
  }

  put(reqInfo: RequestInfo) {
    console.log({ reqInfo });
    return undefined;
  }
}
