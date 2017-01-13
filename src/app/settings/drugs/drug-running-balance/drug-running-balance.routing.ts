import { Routes, RouterModule } from '@angular/router';
import { DrugRunningBalanceComponent } from './drug-running-balance.component';

export const drugrunningbalanceRoutes: Routes = [{
    path: '',
    component: DrugRunningBalanceComponent
}];

export const drugrunningbalanceRouting = RouterModule.forChild(drugrunningbalanceRoutes);