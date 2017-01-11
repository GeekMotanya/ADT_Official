import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityDetailsComponent } from './facility-details.component';
import { facilitydetailsRouting } from './facility-details.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        facilitydetailsRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [FacilityDetailsComponent],
    providers: [],
})
export class FacilityDetailsModule { }