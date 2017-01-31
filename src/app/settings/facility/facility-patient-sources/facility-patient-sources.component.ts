import { Component, OnInit, Input, DoCheck, ViewChild, AfterViewChecked, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Sources } from '../facility';
import { FacilityService } from '../facility.service';

@Component({
  selector: 'app-facility-patient-sources',
  templateUrl: './facility-patient-sources.component.html',
  styleUrls: ['./facility-patient-sources.component.css']
})
export class FacilityPatientSourcesComponent implements OnInit {

  errorMessage: string;
  sourcesList: Sources[];
  source = new Sources();
  @Input() formType: string;
  jQuery: any;
  form: string;

  constructor(private _facilityService: FacilityService) { }

  sourcesForm: NgForm;
  @ViewChild ('sourcesForm')
  editForm: NgForm;
  // @ViewChild('editForm')

  ngOnInit() {
    this._facilityService.getSources().subscribe(data => this.sourcesList = data);
  }

  onSubmit(): void {    
      this._facilityService.addPatientSource(this.source).subscribe(
        () => this.onSaveComplete(),
        error => console.log(error)
      );
    }  

  onSaveComplete() {
    console.log('Created a new patient source...');
    jQuery("#newPatientSource").modal("hide");
    this._facilityService.getSources().subscribe(data => this.sourcesList = data);
  }

  onUpdateComplete(val) {
        this.editForm.reset();
        jQuery("#edit").modal("hide");
        this._facilityService.getSources().subscribe(data => this.sourcesList = data);
    }

  disable(val) {
    this._facilityService.disableSource(val).subscribe(
      () => this._facilityService.getSources().subscribe(data => this.sourcesList = data),
      (error) => { console.log("Error happened" + error) },
      () => { console.log("DELETED") }
    );
  }

  get diagnostic() {
    return JSON.stringify(this.sourcesList);
  }


}
