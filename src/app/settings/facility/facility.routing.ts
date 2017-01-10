import { RouterModule, Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: 'facility-details',
        loadChildren: 'app/settings/facility/facility-details/facility-details.module#FacilityDetailsModule',
        data: { pageTitle: 'Facility Details'}
    }
];

export const routing = RouterModule.forChild(routes);
