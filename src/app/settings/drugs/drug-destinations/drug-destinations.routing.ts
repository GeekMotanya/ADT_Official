import { Routes, RouterModule } from '@angular/router';
import { DrugDestinationsComponent } from './drug-destinations.component';

export const drugdestinationsRoutes: Routes = [{
    path: '',
    component: DrugDestinationsComponent
}];

export const drugdestinationsRouting = RouterModule.forChild(drugdestinationsRoutes);