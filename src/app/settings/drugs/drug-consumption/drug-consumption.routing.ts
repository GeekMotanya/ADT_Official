import { Routes, RouterModule } from '@angular/router';
import { DrugConsumptionComponent } from './drug-consumption.component';

export const drugconsumptionRoutes: Routes = [{
    path: '',
    component: DrugConsumptionComponent
}];

export const drugconsumptionRouting = RouterModule.forChild(drugconsumptionRoutes);