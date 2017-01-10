import { RouterModule, Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: 'facility',
        loadChildren: 'app/settings/facility/facility.module#FacilityModule',
        data: { pageTitle: 'Facility'}
    }
];

export const routing = RouterModule.forChild(routes);