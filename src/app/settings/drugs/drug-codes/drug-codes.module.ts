import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugCodesComponent } from './drug-codes.component';
import { drugcodesRouting } from './drug-codes.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        drugcodesRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [DrugCodesComponent],
    providers: [],
})
export class DrugCodesModule { }