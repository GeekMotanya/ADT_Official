import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'inventory-management',
        loadChildren: 'app/inventory/inventory-management/inventory-management.module#InventoryManagementModule',
        data: { pageTitle: 'Inventory Management' }
    },
    {
        path: 'bin-card',
        loadChildren: 'app/inventory/bin-card/bin-card.module#BinCardModule',
        data: { pageTitle: 'Drug Bin Card' }
    },
    {
        path: 'stock-transactions',
        loadChildren: 'app/inventory/stock-transactions/stock-transactions.module#StockTransactionsModule',
        data: { pageTitle: 'Stock Transactions' }
    }
];

export const routing = RouterModule.forChild(routes);