import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { routing } from "./patients.routing";
import { SmartadminModule } from "../shared/smartadmin.module";
import { FormsModule } from '@angular/forms';

import { PatientsService } from './patients.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    routing,
    SmartadminModule,
    FormsModule
  ],
  providers: [PatientsService],
  entryComponents: []
})
export class PatientsModule { }