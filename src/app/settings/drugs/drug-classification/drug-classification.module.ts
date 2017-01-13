import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugClassificationComponent } from './drug-classification.component';
import { drugclassificationRouting } from './drug-classification.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        drugclassificationRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [DrugClassificationComponent],
    providers: [],
})
export class DrugClassificationModule { }