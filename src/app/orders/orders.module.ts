import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { routing } from "./orders.routing";
import { SmartadminModule } from "../shared/smartadmin.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    routing,
    SmartadminModule,
    FormsModule
  ],
  providers: [],
  entryComponents: []
})
export class OrdersModule { }