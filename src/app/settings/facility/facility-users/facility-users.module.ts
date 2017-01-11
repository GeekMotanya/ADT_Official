import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityUsersComponent } from './facility-users.component';
import { facilityusersRouting } from './facility-users.routing';
import { SmartadminModule } from "../../../shared/smartadmin.module";

@NgModule({
    imports: [
        CommonModule,
        facilityusersRouting,
        SmartadminModule

    ],
    exports: [],
    declarations: [FacilityUsersComponent],
    providers: [],
})
export class FacilityUsersModule { }