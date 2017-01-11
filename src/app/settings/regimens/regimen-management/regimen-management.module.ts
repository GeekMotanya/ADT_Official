import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimenManagementComponent } from './regimen-management.component';
import { regimenmanagementRouting } from './regimen-management.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        regimenmanagementRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [RegimenManagementComponent],
    providers: [],
})
export class RegimenManagementModule { }