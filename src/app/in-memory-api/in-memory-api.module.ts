import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api"
import { InMemoryDataService } from "./in-memory-data.service"



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ]
})
export class InMemoryApiModule { }
