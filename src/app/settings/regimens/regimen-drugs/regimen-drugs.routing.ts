import { Routes, RouterModule } from '@angular/router';
import { RegimenDrugsComponent } from './regimen-drugs.component';

export const regimendrugsRoutes: Routes = [{
    path: '',
    component: RegimenDrugsComponent
}];

export const regimendrugsRouting = RouterModule.forChild(regimendrugsRoutes);