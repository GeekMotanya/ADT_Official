import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimenServiceTypeComponent } from './regimen-service-type.component';
import { regimenservicetypeRouting } from './regimen-service-type.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        regimenservicetypeRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [RegimenServiceTypeComponent],
    providers: [],
})
export class RegimenServiceTypeModule { }