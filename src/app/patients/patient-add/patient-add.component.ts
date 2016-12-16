import { Component, OnInit, Input } from '@angular/core';
// import { PatientsService } from '../patients.service';
// import { Patient, Service, Status, Regimen, Prophylaxis, Who_stage, Source, Illness } from '../patients';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css'],
  // providers: [PatientsService]
})

export class PatientAddComponent implements OnInit {
  date_of_birth: any;
  age_in_years: any;
  age_in_months: any;
  today: any = new Date();
  ngOnInit(): void {
    console.log('Patient add module intialized ...');
  }

  getDate(value: any) {
    // console.log('The date is '+ value);
    let dob: any = new Date(value);
    let today: any = new Date();
    this.age_in_years = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    // console.log(dob);
    var yearDiff = today.getFullYear() - dob.getFullYear();
    var y1 = today.getFullYear();
    var y2 = dob.getFullYear();
    this.age_in_months = (today.getMonth() + y1 * 12) - (dob.getMonth() + y2 * 12);
  }
}
