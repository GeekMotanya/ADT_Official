import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryManagementRouting } from './inventory-management.routing';
import { InventoryManagementComponent } from './inventory-management.component';
import {SmartadminModule} from "../../shared/smartadmin.module";    
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

@NgModule({
    imports: [
        CommonModule,
        InventoryManagementRouting,
        SmartadminModule,
        SmartadminDatatableModule
    ],
    exports: [],
    declarations: [InventoryManagementComponent],
    providers: [],
})
export class InventoryManagementModule { }