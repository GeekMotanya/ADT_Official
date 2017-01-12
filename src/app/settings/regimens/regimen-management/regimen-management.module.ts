import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimenManagementComponent } from './regimen-management.component';
import { regimenmanagementRouting } from './regimen-management.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";
import {SmartadminDatatableModule} from "../../../shared/ui/datatable/smartadmin-datatable.module";

@NgModule({
    imports: [
        CommonModule,
        regimenmanagementRouting,
        SmartadminModule,
        SmartadminDatatableModule

    ],
    exports: [],
    declarations: [RegimenManagementComponent],
    providers: [],
})
export class RegimenManagementModule { }