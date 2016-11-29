import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinCardRouting } from './bin-card.routing';
import { BinCardComponent } from './bin-card.component';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";

@NgModule({
    imports: [
        CommonModule,
        BinCardRouting,
        SmartadminModule,
        SmartadminDatatableModule
    ],
    exports: [],
    declarations: [BinCardComponent],
    providers: [],
})
export class BinCardModule { }