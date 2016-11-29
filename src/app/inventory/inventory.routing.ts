import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'inventory-management',
        loadChildren: 'app/inventory/inventory-management/inventory-management.module#InventoryManagementModule',
        data: { pageTitle: 'Add Patient' }
    },
];

export const routing = RouterModule.forChild(routes);