import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Patient } from '../patients';
import { PatientsService } from '../patients.service';
import 'rxjs/add/operator/switchMap';

@Component({
  template: 'Hi'
})
export class PatientEditComponent implements OnInit, OnDestroy {
  model: Patient;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
    private _router: Router,
    private _patientService: PatientsService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this._patientService.getPatient(+params['id']))
      .subscribe(patient => this.model = patient);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  //  getPatient(id: number) {
  //    this._patientService.getPatient(id).subscribe(
  //           product => this.model = product,
  //           error => this.errorMessage = <any>error);
  //   }
}