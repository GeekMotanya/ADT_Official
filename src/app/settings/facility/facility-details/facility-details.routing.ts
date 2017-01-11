import { Routes, RouterModule } from '@angular/router';
import { FacilityDetailsComponent } from './facility-details.component';

export const facilitydetailsRoutes: Routes =[{
    path: '',
    component: FacilityDetailsComponent
}];

export const facilitydetailsRouting = RouterModule.forChild(facilitydetailsRoutes);