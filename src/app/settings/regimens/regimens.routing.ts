import { RouterModule, Routes } from "@angular/router";
import { RegimenChangeReasonComponent } from "./regimen-change-reason/regimen-change-reason.component";
import { RegimenDrugsComponent } from "./regimen-drugs/regimen-drugs.component";
import { RegimenManagementComponent } from "./regimen-management/regimen-management.component";
import { RegimenServiceTypeComponent } from "./regimen-service-type/regimen-service-type.component";


export const routes: Routes = [
    {
        path: 'regimen-change-reason',
        component: RegimenChangeReasonComponent,
        data: { pageTitle: 'Regimen Change Reason Management' }
    },
    {
        path: 'regimen-drugs',
        component: RegimenDrugsComponent,
        data: { pageTitle: 'Regimen Drugs Management' }
    },
    {
        path: 'regimen-management',
        component: RegimenManagementComponent,
        data: { pageTitle: 'Regimen Management' }
    },
    {
        path: 'regimen-service-type',
        component: RegimenServiceTypeComponent,
        data: { pageTitle: 'Regimen Service Type Management' }
    }
];

export const routing = RouterModule.forChild(routes);
