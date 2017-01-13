import { Routes, RouterModule } from '@angular/router';
import { GenericNamesComponent } from './generic-names.component';

export const genericnamesRoutes: Routes = [{
    path: '',
    component: GenericNamesComponent
}];

export const genericnamesRouting = RouterModule.forChild(genericnamesRoutes);