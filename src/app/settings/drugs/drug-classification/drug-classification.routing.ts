import { Routes, RouterModule } from '@angular/router';
import { DrugClassificationComponent } from './drug-classification.component';

export const drugclassificationRoutes: Routes = [{
    path: '',
    component: DrugClassificationComponent
}];

export const drugclassificationRouting = RouterModule.forChild(drugclassificationRoutes);