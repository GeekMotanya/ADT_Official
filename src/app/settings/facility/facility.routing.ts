import { RouterModule, Routes } from "@angular/router";
import { FacilityDetailsComponent } from "./facility-details/facility-details.component"
import { FacilityPatientSourcesComponent } from "./facility-patient-sources/facility-patient-sources.component"
import { FacilitySupportersComponent } from "./facility-supporters/facility-supporters.component"
import { FacilityUsersComponent } from "./facility-users/facility-users.component"


export const routes: Routes = [
    {
        path: 'facility-details',
        loadChildren: 'app/settings/facility/facility-details/facility-details.module#FacilityDetailsModule',
        data: { pageTitle: 'Facility Details' }
    },
    {
        path: 'facility-patient-sources',
        loadChildren: 'app/settings/facility/facility-patient-sources/facility-patient-sources.module#FacilityPatientSourcesModule',
        data: { pageTitle: 'Facility Patient Sources' }
    },
    {
        path: 'facility-supporters',
        loadChildren: 'app/settings/facility/facility-supporters/facility-supporters.module#FacilitySupportersModule',
        data: { pageTitle: 'Facility Supporters' }
    },
    {
        path: 'facility-users',
        loadChildren: 'app/settings/facility/facility-users/facility-users.module#FacilityUsersModule',
        data: { pageTitle: 'Facility Users' }
    }
];

export const routing = RouterModule.forChild(routes);
