import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Patient } from '../patients';
import { PatientsService } from '../patients.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-patient-view',
  templateUrl: 'patient-view.component.html'
})
export class PatientViewComponent implements OnInit {
  model = new Patient();
  errorMessage: string;


  constructor(private route: ActivatedRoute,
    private _router: Router,
    private _patientService: PatientsService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this._patientService.getPatient(+params['id']))
      .subscribe(patient => this.model = patient);
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

  getPatient(id: number) {
    this._patientService.getPatient(id).subscribe(
      product => this.model = product,
      error => this.errorMessage = <any>error);
  }

  // TODO: Remove this when done
    get diagnostic () {
        return JSON.stringify(this.model);
    }

}
