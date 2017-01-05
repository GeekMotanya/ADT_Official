import { Component, OnInit, Input, DoCheck } from '@angular/core';
// import { PatientsService } from '../patients.service';
import { Patient, Service, Status, Regimen, Prophylaxis, Who_stage, Source, Illness } from '../patients';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css'],
  // providers: [PatientsService]
})

export class PatientAddComponent implements OnInit, DoCheck {

  // Define properties first.
  date_of_birth: any;
  age_in_years: any;
  age_in_months: any;
  gender: string;
  weight: any;
  height: any;
  bsa: any;
  ctrl: any;
  model = new Patient;
  source = new Source;
  service = new Service
  regimen = new Regimen;
  who_stage = new Who_stage;
  prophylaxis = new Prophylaxis;

  private selectedOptions: string[]; // Default selection
  private myOptions: IMultiSelectOption[] = [
    { id: 'Awesome', name: 'Option 1' },
    { id: 2, name: 'Option 2' },
  ];

  private mySettings: IMultiSelectSettings = {
    pullRight: false,
    enableSearch: true,
    checkedStyle: 'checkboxes',
    buttonClasses: 'btn btn-default',
    selectionLimit: 0,
    closeOnSelect: false,
    showCheckAll: false,
    showUncheckAll: false,
    dynamicTitleMaxItems: 3,
    maxHeight: '300px',
  };

  private myTexts: IMultiSelectTexts = {
    checkAll: 'Check all',
    uncheckAll: 'Uncheck all',
    checked: 'checked',
    checkedPlural: 'checked',
    searchPlaceholder: 'Search...',
    defaultTitle: 'Select',
  };

  // Methods section: The constructor comes first!
  ngOnInit(): void {
    console.log('Patient add module intialized ...');
  }

  ngDoCheck(): void {
    let bsa: number = Math.sqrt((this.model.current_weight * this.model.current_height) / 3600);
    console.log(this.model.bsa = bsa);
  }

  getDate(value: any) {
    let dob: any = new Date(value);
    let today: any = new Date();
    this.age_in_years = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    var yearDiff = today.getFullYear() - dob.getFullYear();
    var y1 = today.getFullYear();
    var y2 = dob.getFullYear();
    this.age_in_months = (today.getMonth() + y1 * 12) - (dob.getMonth() + y2 * 12);
  }

  // TODO: Remove this when we're done

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  onSubmit(): void {

  }
  onChange(value: any): void {
    console.log(value);
  }
}
