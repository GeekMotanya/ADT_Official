import { RouterModule, Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: 'add-patient',
        loadChildren: 'app/patients/patient-add/patient-add.module#PatientAddModule',
        data: { pageTitle: 'Add Patient' }
    },
    {
        path: 'list-patients',
        loadChildren: 'app/patients/patient-list/patient-list.module#PatientListModule',
        data: { pageTitle: 'Patient List' }
    },
    {
        path: 'view',
        loadChildren: 'app/patients/patient-view/patient-view.module#PatientViewModule',
        data: { pageTitle: 'Patient View' }
    },
    {
        path: 'dispense',
        loadChildren: 'app/patients/patient-dispense/patient-dispense.module#PatientDispenseModule',
        data: { pageTitle: 'Dispensing Details' }
    },
    {
        path: 'edit',
        loadChildren: 'app/patients/patient-edit/patient-edit.module#PatientEditModule',
        data: { pageTitle: 'Edit Patient' }
    }
];

export const routing = RouterModule.forChild(routes);