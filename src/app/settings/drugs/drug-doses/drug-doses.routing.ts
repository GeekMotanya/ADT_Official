import { Routes, RouterModule } from '@angular/router';
import { DrugDosesComponent } from './drug-doses.component';

export const drugdosesRoutes: Routes = [{
    path: '',
    component: DrugDosesComponent
}];

export const drugdosesRouting = RouterModule.forChild(drugdosesRoutes);