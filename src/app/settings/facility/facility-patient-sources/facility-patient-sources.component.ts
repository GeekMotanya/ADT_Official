import { Component, OnInit, Input, DoCheck, ViewChild, AfterViewChecked, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  @Input() source = new Sources;
  jQuery:any;

  constructor(private _facilityService: FacilityService, private router: Router) { }

  sourcesForm: NgForm;

  ngOnInit() {
    this._facilityService.getSources().subscribe(sources => this.source = sources);
  }

  onSubmit(): void {
    this._facilityService.addPatientSource(this.source).subscribe(
      () => this.onSaveComplete(),
      error=>console.log(error)
    );
  }

  onSaveComplete() {
    console.log('Created a new patient source...');
    jQuery("#newPatientSource").modal("hide");
    this.router.navigateByUrl('/settings/facility/facility-patient-sources');
    this._facilityService.getSources().subscribe(sources => this.source = sources);
  }

  get diagnostic() {
    return JSON.stringify(this.source);
  }


}
