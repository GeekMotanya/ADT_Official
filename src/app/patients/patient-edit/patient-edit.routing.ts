import { Routes, RouterModule } from '@angular/router';
import { PatientEditComponent } from "./patient-edit.component";

export const patienteditRoutes: Routes = [{
    path: '',
    component: PatientEditComponent
}];

export const patienteditRouting = RouterModule.forChild(patienteditRoutes);