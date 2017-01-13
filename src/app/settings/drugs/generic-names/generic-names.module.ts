import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericNamesComponent } from './generic-names.component';
import { genericnamesRouting } from './generic-names.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        genericnamesRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [GenericNamesComponent],
    providers: [],
})
export class GenericNamesModule { }