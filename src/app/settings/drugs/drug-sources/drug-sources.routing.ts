import { Routes, RouterModule } from '@angular/router';
import { DrugSourcesComponent } from './drug-sources.component';

export const drugsourcesRoutes: Routes = [{
    path: '',
    component: DrugSourcesComponent
}];

export const drugsourcesRouting = RouterModule.forChild(drugsourcesRoutes);