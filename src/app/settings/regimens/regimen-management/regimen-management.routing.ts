import { Routes, RouterModule } from '@angular/router';
import { RegimenManagementComponent } from './regimen-management.component';

export const regimenmanagementRoutes: Routes = [{
    path: '',
    component: RegimenManagementComponent
}];

export const regimenmanagementRouting = RouterModule.forChild(regimenmanagementRoutes);