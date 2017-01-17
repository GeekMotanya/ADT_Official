import { NgModule } from '@angular/core';

import { SmartadminModule } from "../shared/smartadmin.module";
import { SmartadminInputModule } from "../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";

import { DispenseComponent }   from './dispense.component';
import { routing } from './dispense.routing'

@NgModule({
    imports: [
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        routing
    ],
    exports: [],
    declarations: [DispenseComponent],
    providers: [],
})
export class DispenseModule { }
