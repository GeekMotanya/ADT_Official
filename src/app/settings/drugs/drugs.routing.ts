import { RouterModule, Routes } from "@angular/router";
import { BrandNamesComponent } from "./brand-names/brand-names.component";
import { DrugClassificationComponent } from "./drug-classification/drug-classification.component";
import { DrugCodesComponent } from "./drug-codes/drug-codes.component";
import { DrugConsumptionComponent } from "./drug-consumption/drug-consumption.component";
import { DrugDestinationsComponent } from "./drug-destinations/drug-destinations.component";
import { DrugDosesComponent } from "./drug-doses/drug-doses.component";
import { DrugIndicationsComponent } from "./drug-indications/drug-indications.component";
import { DrugInstructionsComponent } from "./drug-instructions/drug-instructions.component";
import { DrugRunningBalanceComponent } from "./drug-running-balance/drug-running-balance.component";
import { DrugSourcesComponent } from "./drug-sources/drug-sources.component";
import { GenericNamesComponent } from "./generic-names/generic-names.component";


export const routes: Routes = [
    {
        path: 'brand-names',
        loadChildren: 'app/settings/drugs/brand-names/brand-names.module#BrandNamesModule',
        data: { pageTitle: 'Brand Name Management' }
    },
    {
        path: 'drug-classification',
        loadChildren: 'app/settings/drugs/drug-classification/drug-classification.module#DrugClassificationModule',
        data: { pageTitle: 'Drug Classification Management' }
    },
    {
        path: 'drug-codes',
        loadChildren: 'app/settings/drugs/drug-codes/drug-codes.module#DrugCodesModule',
        data: { pageTitle: 'Drug Code Management' }
    },
    {
        path: 'drug-consumption',
        loadChildren: 'app/settings/drugs/drug-consumption/drug-consumption.module#DrugConsumptionModule',
        data: { pageTitle: 'Drug Consumption Management' }
    },
    {
        path: 'drug-destinations',
        loadChildren: 'app/settings/drugs/drug-destinations/drug-destinations.module#DrugDestinationsModule',
        data: { pageTitle: 'Drug Destination Management' }
    },
    {
        path: 'drug-doses',
        loadChildren: 'app/settings/drugs/drug-doses/drug-doses.module#DrugDosesModule',
        data: { pageTitle: 'Drug Dose Management' }
    },
    {
        path: 'drug-indications',
        loadChildren: 'app/settings/drugs/drug-indications/drug-indications.module#DrugIndicationsModule',
        data: { pageTitle: 'Drug Indication Management' }
    },
    {
        path: 'drug-instructions',
        loadChildren: 'app/settings/drugs/drug-instructions/drug-instructions.module#DrugInstructionsModule',
        data: { pageTitle: 'Drug Instruction Management' }
    },
    {
        path: 'drug-running-balance',
        loadChildren: 'app/settings/drugs/drug-running-balance/drug-running-balance.module#DrugRunningBalanceModule',
        data: { pageTitle: 'Drug Running Balance Management' }
    },
    {
        path: 'drug-sources',
        loadChildren: 'app/settings/drugs//drug-sources/drug-sources.module#DrugSourcesModule',
        data: { pageTitle: 'Drug Sources Management' }
    },
    {
        path: 'generic-names',
        loadChildren: 'app/settings/drugs/generic-names/generic-names.module#GenericNamesModule',
        data: { pageTitle: 'Generic Name Management' }
    },
];

export const routing = RouterModule.forChild(routes);
