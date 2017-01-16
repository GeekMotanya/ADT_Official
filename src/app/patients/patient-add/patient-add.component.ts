import { Component, OnInit } from '@angular/core';

@Component({
  template: `<shared-patient-form></shared-patient-form>`
})
export class PatientAddComponent implements OnInit {
  constructor() { }

  ngOnInit() { 
    console.log('Intializing Add Component')
  }
}