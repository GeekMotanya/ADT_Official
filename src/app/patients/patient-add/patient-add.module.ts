import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { patientaddRouting } from './patient-add.routing';
import { PatientAddComponent } from './patient-add.component';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@NgModule({
    imports: [
        CommonModule,
        patientaddRouting,
        SmartadminModule,
        MultiselectDropdownModule,
        SmartadminInputModule
    ],
    exports: [],
    declarations: [PatientAddComponent],
    providers: [],
})
export class PatientAddModule { }