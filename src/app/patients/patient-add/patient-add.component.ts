import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient, Service, Status, Regimen, Prophylaxis, Who_stage, Source, Illness, Allergies } from '../patients';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

// import {}

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
  illness: Illness[];
  allergies: Allergies[];
  errorMessage: string;
  patientServices: Service[];
  patientRegimen: Regimen[];
  patientWhostage: Who_stage[];
  patientProphylaxis: IMultiSelectOption[];

  private selectedOptions: string[]; // Default selection

  private myOptions: IMultiSelectOption[];

  private allergiesList: IMultiSelectOption[];

  private patientSources: string[];

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
  constructor(private _patientService: PatientsService) { }

  ngOnInit(): void {
    this._patientService.getIllness()
      .subscribe(illness => this.myOptions = illness,
      error => this.errorMessage = <any>error);
    this._patientService.getAllergies()
      .subscribe(allergies => this.allergiesList = allergies,
      error => this.errorMessage = <any>error);
    this._patientService.getSource()
      .subscribe(sources => this.patientSources = sources,
      error => this.errorMessage = <any>error);
    this._patientService.getService()
      .subscribe(services => this.patientServices = services,
      error => this.errorMessage = <any>error);
    this._patientService.getRegimen()
        .subscribe(regimen => this.patientRegimen = regimen, 
        error => this.errorMessage = <any>error);
    this._patientService.getWho_stage()
        .subscribe(who_stage => this.patientWhostage = who_stage, 
        error => this.errorMessage = <any>error);
    this._patientService.getProphylaxis()
        .subscribe(regimen => this.patientProphylaxis = regimen, 
        error => this.errorMessage = <any>error);
  }

  ngDoCheck(): void {
    this.model.bsa = Math.sqrt((this.model.current_weight * this.model.current_height) / 3600);
    // console.log(this.illness.data);
  }

  getDate(value: any) {
    let dob: any = new Date(value);
    // Update the birth date to the model
    this.model.birth_date = value;
    let today: any = new Date();
    this.age_in_years = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    this.model.age_in_years = this.age_in_years
    var yearDiff = today.getFullYear() - dob.getFullYear();
    var y1 = today.getFullYear();
    var y2 = dob.getFullYear();
    this.age_in_months = (today.getMonth() + y1 * 12) - (dob.getMonth() + y2 * 12);
    this.model.age_in_months = this.age_in_months;
  }

  setEnrollDate(value: any) {
    this.model.enrollment_date = value;
  }

  set regimenDate(value: any) {
    this.model.regimen_start_date = value;
  }

  // TODO: Remove this when we're done

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  onSubmit(): void {
    this._patientService.addPatient(this.model);
    // console.log(this.model);
  }

  onChange(value: any): void {
    console.log(value);
  }
}
