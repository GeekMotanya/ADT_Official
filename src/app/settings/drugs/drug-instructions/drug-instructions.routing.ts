import { Routes, RouterModule } from '@angular/router';
import { DrugInstructionsComponent } from './drug-instructions.component';

export const druginstructionsRoutes: Routes = [{
    path: '',
    component: DrugInstructionsComponent
}];

export const druginstructionsRouting = RouterModule.forChild(druginstructionsRoutes);