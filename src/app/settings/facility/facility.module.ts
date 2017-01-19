import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { routing } from "./facility.routing";
import { SmartadminModule } from "../../shared/smartadmin.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { FormsModule } from '@angular/forms';
import { FacilityDetailsComponent } from "./facility-details/facility-details.component"
import { FacilityPatientSourcesComponent } from "./facility-patient-sources/facility-patient-sources.component"
import { FacilitySupportersComponent } from "./facility-supporters/facility-supporters.component"
import { FacilityUsersComponent } from "./facility-users/facility-users.component"

@NgModule({
  declarations: [
    FacilityPatientSourcesComponent,
    FacilityDetailsComponent,
    FacilitySupportersComponent,
    FacilityUsersComponent
  ],
  imports: [
    CommonModule,
    routing,
    SmartadminModule,
    SmartadminDatatableModule,
    SmartadminInputModule,
    FormsModule
  ]
})

export class FacilityModule { }