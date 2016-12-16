import { RouterModule, Routes } from "@angular/router";
import { BinCardComponent } from './bin-card.component';

export const routes: Routes = [
    {
        path: '',
        component: BinCardComponent
    }
];

export const BinCardRouting = RouterModule.forChild(routes);