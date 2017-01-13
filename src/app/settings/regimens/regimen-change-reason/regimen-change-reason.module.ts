import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimenChangeReasonComponent } from './regimen-change-reason.component';
import { regimenchangereasonRouting } from './regimen-change-reason.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        regimenchangereasonRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [RegimenChangeReasonComponent],
    providers: [],
})
export class RegimenChangeReasonModule { }