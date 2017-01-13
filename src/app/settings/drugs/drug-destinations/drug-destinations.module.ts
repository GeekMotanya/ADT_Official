import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugDestinationsComponent } from './drug-destinations.component';
import { drugdestinationsRouting } from './drug-destinations.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        drugdestinationsRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [DrugDestinationsComponent],
    providers: [],
})
export class DrugDestinationsModule { }