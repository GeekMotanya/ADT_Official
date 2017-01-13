import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityPatientSourcesComponent } from './facility-patient-sources.component';
import { facilitypatientsourcesRouting } from './facility-patient-sources.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        facilitypatientsourcesRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [FacilityPatientSourcesComponent],
    providers: [],
})
export class FacilityPatientSourcesModule { }