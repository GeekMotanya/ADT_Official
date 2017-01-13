import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugInstructionsComponent } from './drug-instructions.component';
import { druginstructionsRouting } from './drug-instructions.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        druginstructionsRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [DrugInstructionsComponent],
    providers: [],
})
export class DrugInstructionsModule { }