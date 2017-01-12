import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugIndicationsComponent } from './drug-indications.component';
import { drugindicationsRouting } from './drug-indications.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        drugindicationsRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [DrugIndicationsComponent],
    providers: [],
})
export class DrugIndicationsModule { }