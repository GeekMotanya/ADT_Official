import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugDosesComponent } from './drug-doses.component';
import { drugdosesRouting } from './drug-doses.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        drugdosesRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [DrugDosesComponent],
    providers: [],
})
export class DrugDosesModule { }