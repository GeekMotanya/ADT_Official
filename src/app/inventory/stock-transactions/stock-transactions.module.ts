import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { stocktransactionsRouting } from './stock-transactions.routing';
import { StockTransactionsComponent } from './stock-transactions.component';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";

@NgModule({
    imports: [
        CommonModule,
        stocktransactionsRouting,
        SmartadminModule,
        SmartadminDatatableModule
    ],
    exports: [],
    declarations: [StockTransactionsComponent],
    providers: [],
})
export class StockTransactionsModule { }