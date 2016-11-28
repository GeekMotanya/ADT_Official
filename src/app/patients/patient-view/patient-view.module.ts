import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { patientviewRouting } from './patient-view.routing';
import { PatientViewComponent } from './patient-view.component';
// import { generalElementsRouting } from '../../+ui-elements/+general-elements/general-elements.routing';
import { GeneralElementsComponent } from "../../+ui-elements/+general-elements/general-elements.component";
import { SmartadminModule } from "../../shared/smartadmin.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";

@NgModule({
    imports: [
        CommonModule,
        patientviewRouting,
        // generalElementsRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule
    ],
    exports: [],
    declarations: [PatientViewComponent, GeneralElementsComponent],
    providers: []
})
export class PatientViewModule { }
