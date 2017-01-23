import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SmartadminModule } from "../../shared/smartadmin.module";
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
// import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

import { SharedComponent }   from './shared.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SmartadminInputModule,
        // SmartadminDatatableModule,
        SmartadminModule,
        MultiselectDropdownModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        SmartadminInputModule,
        // SmartadminDatatableModule,
        SmartadminModule,
        MultiselectDropdownModule,
        SharedComponent
    ],
    declarations: [SharedComponent],
    providers: [],
})
export class SharedModule { }


