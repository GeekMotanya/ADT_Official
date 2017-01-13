import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugSourcesComponent } from './drug-sources.component';
import { drugsourcesRouting } from './drug-sources.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        drugsourcesRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [DrugSourcesComponent],
    providers: [],
})
export class DrugSourcesModule { }