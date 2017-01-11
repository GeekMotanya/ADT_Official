import { Routes, RouterModule } from '@angular/router';
import { FacilityUsersComponent } from './facility-users.component';

export const facilityusersRoutes: Routes =[{
    path: '',
    component: FacilityUsersComponent
}];

export const facilityusersRouting = RouterModule.forChild(facilityusersRoutes);