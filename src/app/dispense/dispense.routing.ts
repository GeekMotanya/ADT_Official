import { RouterModule, Routes } from '@angular/router';
import { DispenseComponent } from './dispense.component';

export const routes: Routes = [
    {
        path: '',
        component: DispenseComponent,
        data: { pageTitle: 'Dispense'}
    }
];

export const routing = RouterModule.forChild(routes);