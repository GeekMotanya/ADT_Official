import { RouterModule, Routes } from "@angular/router";
import { InventoryManagementComponent } from './inventory-management.component';

export const routes: Routes = [
    {  path: '', 
    component: InventoryManagementComponent
}
];

export const InventoryManagementRouting = RouterModule.forChild(routes);