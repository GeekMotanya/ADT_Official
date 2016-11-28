import { Routes, RouterModule } from '@angular/router';
import { PatientViewComponent } from "./patient-view.component";

export const patientviewRoutes: Routes = [{
    path: '',
    component: PatientViewComponent
}];

export const patientviewRouting = RouterModule.forChild(patientviewRoutes);