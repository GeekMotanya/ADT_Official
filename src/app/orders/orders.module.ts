import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { routing } from "./orders.routing";
import { SmartadminModule } from "../shared/smartadmin.module";
import { FormsModule } from '@angular/forms';
import { SmartadminInputModule } from "../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    routing,
    SmartadminModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule
  ],
  providers: [],
  entryComponents: []
})
export class OrdersModule { }