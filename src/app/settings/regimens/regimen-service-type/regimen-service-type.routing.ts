import { Routes, RouterModule } from '@angular/router';
import { RegimenServiceTypeComponent } from './regimen-service-type.component';

export const regimenservicetypeRoutes: Routes = [{
    path: '',
    component: RegimenServiceTypeComponent
}];

export const regimenservicetypeRouting = RouterModule.forChild(regimenservicetypeRoutes);