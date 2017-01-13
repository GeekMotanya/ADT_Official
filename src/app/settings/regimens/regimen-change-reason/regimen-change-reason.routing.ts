import { Routes, RouterModule } from '@angular/router';
import { RegimenChangeReasonComponent } from './regimen-change-reason.component';

export const regimenchangereasonRoutes: Routes = [{
    path: '',
    component: RegimenChangeReasonComponent
}];

export const regimenchangereasonRouting = RouterModule.forChild(regimenchangereasonRoutes);