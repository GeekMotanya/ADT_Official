import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BinCardComponent } from "./bin-card/bin-card.component";
import { InventoryManagementComponent } from "./inventory-management/inventory-management.component";
import { StockTransactionsComponent } from "./stock-transactions/stock-transactions.component";
import { routing } from "./inventory.routing";
import { SmartadminModule } from "../shared/smartadmin.module";
import { SmartadminInputModule } from "../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { PaginationModule } from 'ng2-bootstrap';

import { InventoryService } from './inventory.service';
@NgModule({
    declarations: [
        BinCardComponent,
        InventoryManagementComponent,
        StockTransactionsComponent
    ],
    imports: [
        CommonModule,
        routing,
        SmartadminModule,
        SmartadminDatatableModule,
        SmartadminInputModule,
        PaginationModule
    ],
    providers: [InventoryService]
})
export class InventoryModule { }