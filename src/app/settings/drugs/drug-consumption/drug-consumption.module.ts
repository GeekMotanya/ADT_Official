import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugConsumptionComponent } from './drug-consumption.component';
import { drugconsumptionRouting } from './drug-consumption.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        drugconsumptionRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [DrugConsumptionComponent],
    providers: [],
})
export class DrugConsumptionModule { }