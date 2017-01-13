import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugRunningBalanceComponent } from './drug-running-balance.component';
import { drugrunningbalanceRouting } from './drug-running-balance.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        drugrunningbalanceRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [DrugRunningBalanceComponent],
    providers: [],
})
export class DrugRunningBalanceModule { }