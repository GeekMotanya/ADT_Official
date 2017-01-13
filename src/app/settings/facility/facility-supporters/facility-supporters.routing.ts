import { Routes, RouterModule } from '@angular/router';
import { FacilitySupportersComponent } from './facility-supporters.component';

export const facilitysupportersRoutes: Routes =[{
    path: '',
    component: FacilitySupportersComponent
}];

export const facilitysupportersRouting = RouterModule.forChild(facilitysupportersRoutes);