import { Routes, RouterModule } from '@angular/router';
import { BrandNamesComponent } from './brand-names.component';

export const brandnamesRoutes: Routes = [{
    path: '',
    component: BrandNamesComponent
}];

export const brandnamesRouting = RouterModule.forChild(brandnamesRoutes);