import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
// import { InventoryManagementRouting } from './inventory-management.routing';
import { InventoryManagementComponent }   from './inventory-management.component';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

@NgModule({
    imports: [
        CommonModule,
        // patientaddRouting,
        SmartadminModule,
        SmartadminInputModule
    ],
    exports: [],
    declarations: [InventoryManagementComponent],
    providers: [],
})
export class InventoryManagementModule { }