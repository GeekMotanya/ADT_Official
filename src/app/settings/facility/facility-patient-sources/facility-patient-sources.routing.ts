import { Routes, RouterModule } from '@angular/router';
import { FacilityPatientSourcesComponent } from './facility-patient-sources.component';

export const facilitypatientsourcesRoutes: Routes =[{
    path: '',
    component: FacilityPatientSourcesComponent
}];

export const facilitypatientsourcesRouting = RouterModule.forChild(facilitypatientsourcesRoutes);