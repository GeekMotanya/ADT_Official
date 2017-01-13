import { RouterModule, Routes } from "@angular/router";
import { RegimenChangeReasonComponent } from "./regimen-change-reason/regimen-change-reason.component";
import { RegimenDrugsComponent } from "./regimen-drugs/regimen-drugs.component";
import { RegimenManagementComponent } from "./regimen-management/regimen-management.component";
import { RegimenServiceTypeComponent } from "./regimen-service-type/regimen-service-type.component";


export const routes: Routes = [
    {
        path: 'regimen-change-reason',
        loadChildren: 'app/settings/regimens/regimen-change-reason/regimen-change-reason.module#RegimenChangeReasonModule',
        data: { pageTitle: 'Regimen Change Reason Management' }
    },
    {
        path: 'regimen-drugs',
        loadChildren: 'app/settings/regimens/regimen-drugs/regimen-drugs.module#RegimenDrugsModule',
        data: { pageTitle: 'Regimen Drugs Management' }
    },
    {
        path: 'regimen-management',
        loadChildren: 'app/settings/regimens/regimen-management/regimen-management.module#RegimenManagementModule',
        data: { pageTitle: 'Regimen Management' }
    },
    {
        path: 'regimen-service-type',
        loadChildren: 'app/settings/regimens/regimen-service-type/regimen-service-type.module#RegimenServiceTypeModule',
        data: { pageTitle: 'Regimen Service Type Management' }
    }
];

export const routing = RouterModule.forChild(routes);
