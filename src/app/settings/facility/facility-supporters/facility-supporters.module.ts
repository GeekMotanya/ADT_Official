import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitySupportersComponent } from './facility-supporters.component';
import { facilitysupportersRouting } from './facility-supporters.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        facilitysupportersRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [FacilitySupportersComponent],
    providers: [],
})
export class FacilitySupportersModule { }