import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimenDrugsComponent } from './regimen-drugs.component';
import { regimendrugsRouting } from './regimen-drugs.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        regimendrugsRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [RegimenDrugsComponent],
    providers: [],
})
export class RegimenDrugsModule { }