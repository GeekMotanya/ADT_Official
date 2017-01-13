import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandNamesComponent } from './brand-names.component';
import { brandnamesRouting } from './brand-names.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        brandnamesRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [BrandNamesComponent],
    providers: [],
})
export class BrandNamesModule { }