import { RouterModule, Routes } from "@angular/router";
import { FacilityModule } from './facility/facility.module';
import { RegimensModule } from './regimens/regimens.module';
import { DrugsModule } from './drugs/drugs.module';


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
    },
    {
        path: 'regimens',
        loadChildren: 'app/settings/regimens/regimens.module#RegimensModule',
        data: { pageTitle: 'Regimens' }
    }
];

export const routing = RouterModule.forChild(routes);