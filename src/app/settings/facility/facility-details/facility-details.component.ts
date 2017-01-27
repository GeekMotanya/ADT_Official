import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Facility, Counties } from '../facility';
import { FacilityService } from '../facility.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-facility-details',
  templateUrl: './facility-details.component.html',
  styleUrls: ['./facility-details.component.css']
})

export class FacilityDetailsComponent implements OnInit {
  // edit: boolean = true;
  @Input() edit: boolean;
  model = new Facility();
  errorMessage: string;
  private countiesList: Observable<string[]>;

  constructor(private route: ActivatedRoute,
    private _router: Router,
    private _facilityService: FacilityService) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this._facilityService.getFacilityDetails(+params['id']))
      .subscribe(facility => this.model = facility);

    this.countiesList = this._facilityService.getCounties();
  }

  getFacilityDetails(id: number) {
    this._facilityService.getFacilityDetails(id).subscribe(
      data => this.model = data,
      error => this.errorMessage = <any>error);
  }
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  // Update
  facilityDetailForm: NgForm;
  @ViewChild('facilityDetailForm') currentForm: NgForm;

  ngAfterViewChecked() {
        this.formChanged();
    }

  formChanged() {
      if (this.currentForm === this.facilityDetailForm) { return; }
      this.facilityDetailForm = this.currentForm;
      if (this.facilityDetailForm) {
          this.facilityDetailForm.valueChanges
              .subscribe(data => this.onValueChanged(data));
      }
  }

  onValueChanged(data?: any) {
        if (!this.facilityDetailForm) { return; }
        const form = this.facilityDetailForm.form;
        console.log(form);        
    }

     onSubmit(): void {
       this._facilityService.updateFacility(this.model).subscribe();
     }

}
