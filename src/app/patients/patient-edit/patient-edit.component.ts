import { Component, OnInit, OnDestroy, ViewChild, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { PatientsService } from '../patients.service';
import { Patient, Service, Status, Regimen, Prophylaxis, Who_stage, Source, Illness, Allergies, FamilyPlanning, Locations } from '../patients';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { NgForm } from '@angular/forms';

@Component({
  template:`<patient-form [patient]="patient" [edit]="edit" [formType]="'editPatient'"></patient-form>`
})
export class PatientEditComponent implements OnInit, OnDestroy {
  edit: boolean = true;
  patient = new Patient();

  constructor(private route: ActivatedRoute,
    private _router: Router,
    private _patientService: PatientsService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this._patientService.getPatient(+params['id']))
      .subscribe(patient => this.patient = patient);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}