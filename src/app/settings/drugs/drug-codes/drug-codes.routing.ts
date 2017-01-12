import { Routes, RouterModule } from '@angular/router';
import { DrugCodesComponent } from './drug-codes.component';

export const drugcodesRoutes: Routes = [{
    path: '',
    component: DrugCodesComponent
}];

export const drugcodesRouting = RouterModule.forChild(drugcodesRoutes);