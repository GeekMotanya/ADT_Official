import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient, Service, Status, Regimen, Prophylaxis, Who_stage, Source, Illness } from '../patients';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css'],
  providers: [PatientsService]
})
export class PatientViewComponent implements OnInit {

  patient : Patient[];
  
  constructor(private patientsService: PatientsService) {

  }

  ngOnInit() {
    this.getPatient();
  }

  getPatient(){
    this.patientsService.getPatient().subscribe( patient => { this.patient = patient; });
  }

}
