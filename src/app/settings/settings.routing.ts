import { RouterModule, Routes } from "@angular/router";
import {FacilityModule} from './facility/facility.module';


export const routes: Routes = [
    {
        path: 'facility',
        loadChildren: 'app/settings/facility/facility.module#FacilityModule',
        data: { pageTitle: 'Facility' }
    },
    {
        path: 'drugs',
        loadChildren: 'app/settings/drugs/drugs.module#DrugsModule',
        data: { pageTitle: 'Drugs' }
    }
];

export const routing = RouterModule.forChild(routes);