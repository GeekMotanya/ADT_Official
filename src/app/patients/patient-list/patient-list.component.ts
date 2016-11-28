import { Component, OnInit } from '@angular/core';
import { PatientsService} from '../patients.service';
import {Patient} from '../patients';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [PatientsService]
})
export class PatientListComponent implements OnInit {

  patients : Patient[];
  // constructor(private patientsService:PatientsService) { 

  // }

  ngOnInit() {

  }
}
