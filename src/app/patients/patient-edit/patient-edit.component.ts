import { Component, OnInit } from '@angular/core';

@Component({
  template: '<shared-patient-form [edit]="true"></shared-patient-form>'
})
export class PatientEditComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}