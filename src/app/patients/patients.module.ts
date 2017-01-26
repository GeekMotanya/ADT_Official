import { NgModule } from "@angular/core";

import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientDispenseComponent } from './patient-dispense/patient-dispense.component';
import { LostFollowupComponent } from './lost-followup/lost-followup.component';
import { ErrorsComponent } from './errors/errors.component';
import { PatientsService } from './patients.service';
import { SharedModule } from './shared/shared.module';
import { routing } from "./patients.routing";
import { PatientsFilterPipe } from './patient-list/patients-filter.pipe';
import { PaginationModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    PatientAddComponent,
    PatientListComponent,
    PatientViewComponent,
    PatientEditComponent,
    PatientDispenseComponent,
    LostFollowupComponent,
    ErrorsComponent,
    PatientsFilterPipe
  ],
  imports: [
    routing,
    SharedModule,
    PaginationModule
  ],
  providers: [PatientsService],
  entryComponents: []
})
export class PatientsModule { }