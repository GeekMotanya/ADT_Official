import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { routing } from "./inventory.routing";
import { SmartadminModule } from "../shared/smartadmin.module";

@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        routing,
        SmartadminModule        
    ],
    providers: [],
    entryComponents: []
})
export class InventoryModule { }