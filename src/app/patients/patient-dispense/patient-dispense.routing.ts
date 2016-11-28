import { Routes, RouterModule } from '@angular/router';
import { PatientDispenseComponent } from "./patient-dispense.component";

export const patientdispenseRoutes: Routes = [{
    path: '',
    component: PatientDispenseComponent
}];

export const patientdispenseRouting = RouterModule.forChild(patientdispenseRoutes);