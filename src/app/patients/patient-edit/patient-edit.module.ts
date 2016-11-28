import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { patienteditRouting } from './patient-edit.routing';
import { PatientEditComponent } from './patient-edit.component';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";

@NgModule({
    imports: [
        CommonModule,
        patienteditRouting,
        SmartadminModule,
        SmartadminInputModule
    ],
    exports: [],
    declarations: [PatientEditComponent],
    providers: []
})
export class PatientEditModule { }