import { Routes, RouterModule } from '@angular/router';
import { DrugIndicationsComponent } from './drug-indications.component';

export const drugindicationsRoutes: Routes = [{
    path: '',
    component: DrugIndicationsComponent
}];

export const drugindicationsRouting = RouterModule.forChild(drugindicationsRoutes);