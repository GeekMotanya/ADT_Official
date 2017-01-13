import { RouterModule, Routes } from "@angular/router";
import { StockTransactionsComponent } from './stock-transactions.component';

export const routes: Routes = [
    {
        path: '',
        component: StockTransactionsComponent
    }
];

export const stocktransactionsRouting = RouterModule.forChild(routes);