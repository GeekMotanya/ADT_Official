import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Supporters } from '../facility';
import { FacilityService } from '../facility.service';

@Component({
  selector: 'app-facility-supporters',
  templateUrl: './facility-supporters.component.html',
  styleUrls: ['./facility-supporters.component.css']
})
export class FacilitySupportersComponent implements OnInit {

  errorMessage: string;
  supportersList: Supporters[];
  supporter = new Supporters();
  formType: string;
  jQuery: any;
  form: string;

  constructor(private _facilityService: FacilityService) { }

  ngOnInit() {
    this._facilityService.getSupporters().subscribe(data => this.supportersList = data);
  }

  onSubmit(): void {
    this._facilityService.addSupporter(this.supporter).subscribe(
      () => this.onSaveComplete(),
      error => console.log(error)
    );
  }

  onSaveComplete() {
    console.log('Created a new supporter...');
    jQuery("#newSupporter").modal("hide");
    this._facilityService.getSupporters().subscribe(data => this.supportersList = data);
  }

  disable(val) {
    this._facilityService.disableSupporter(val).subscribe(
      () => this._facilityService.getSupporters().subscribe(data => this.supportersList = data),
      (error) => { console.log("Error happened" + error) },
      () => { console.log("DELETED") }
    );
  }

  get diagnostic() {
    return JSON.stringify(this.supportersList);
  }


}
