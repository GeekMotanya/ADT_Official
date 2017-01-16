import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from './orders.component';


export const routes: Routes = [
    {
        path: '',
        component: OrdersComponent
    }
];

export const routing = RouterModule.forChild(routes);