import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from "./patient-list.component";

export const patientlistRoutes: Routes = [{
  path: '',
  component: PatientListComponent
}];

export const patientlistRouting = RouterModule.forChild(patientlistRoutes);

