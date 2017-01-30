import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Patient, Regimen } from '../patients';
import { PatientsService } from '../patients.service';
import { DispenseService } from './dispense.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DrugsTable } from './dispense';
import 'rxjs/add/operator/switchMap';
declare var $: any;

@Component({
  selector: 'app-dispense',
  templateUrl: './patient-dispense.component.html',
  styleUrls: ['./patient-dispense.component.css'],
  providers: [DatePipe]
})
export class PatientDispenseComponent implements OnInit {

  // TODO: Remove this segment
  public ctrl: number;

  patient = new Patient();

  drug_table = new DrugsTable();

  // Datepicker properties
  date_options: Object = {
    dateFormat: 'mm/dd/yy',
    changeMonth: true,
    changeYear: true,
    beforeShowDay: $.datepicker.noWeekends // Disables weekends in the calendar
  }

  setdate: Date;

  regimenDrugs: Regimen[];
  regimen: any;
  current_regimen: number;
  dispenseTableForm: FormGroup;

  get rows(): FormArray{
        return <FormArray>this.dispenseTableForm.get('dispenseTable');
    }


  constructor(
    private _datePipe: DatePipe,
    private _route: ActivatedRoute,
    private _router: Router,
    private _patientService: PatientsService,
    private _dispenseService: DispenseService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // Passing an id to a router
    this._route.params
      .switchMap((params: Params) => this._patientService.getPatient(+params['id']))
      .subscribe(patient => this.patient = patient);
    this._dispenseService.getRegimenDrugs().subscribe(
      regimen => this.regimenDrugs = regimen,
      error => console.error(error)
    )
    this.dispenseTableForm = this.fb.group({
      dispenseTable: this.fb.array([this.buildRow()])
    })
  }

  buildRow(): FormGroup {
    return this.fb.group({
      drug: '',
      unit: '',
      batch_no: '',
      expiry_date: '',
      dose: '',
      exp_pill_count: '',
      actual_pill_count: '',
      duration: '',
      dispensed_qty: '',
      stock: '',
      indication: '',
      comment: '',
      missed_pills: '',
    });
  }
  /**
   * Get users input, add the number of days and
   * set date picker to use the current date
   * Refer to this article: 
   * http://www.htmlgoodies.com/html5/javascript/calculating-the-difference-between-two-dates-in-javascript.html#fbid=2-vGKw3DAdn
   */
  nextAppointment(val) {
    let date = new Date();
    this.setdate = new Date(date.setTime(date.getTime() + Number(val) * 86400000)); // sets the next appointment based using milliseconds.
    this._datePipe.transform(this.setdate, 'MM/dd/y'); // using angular's built in date pipe to format date object.
  }
  /**
   * Date difference
   */
  dateDiff(todate) {
    let fromdate: any = new Date();
    let to: any = new Date(todate)
    var diff = to - fromdate;
    var divideBy = {
      w: 604800000,
      d: 86400000,
      h: 3600000,
      n: 60000,
      s: 1000
    };

    this.ctrl = Math.floor(diff / divideBy['d']);
    console.log(this.ctrl);
  }

  setDrug(value) {
    this._dispenseService.getRegimen(+[value]).subscribe(
      regimen => this.regimen = regimen,
      error => console.log(error)
    )
  }

  addRow() {
    this.rows.push(this.buildRow());
  }

  removeRow(i: number) {
    // remove address from the list
    const control = <FormArray>this.dispenseTableForm.controls['dispenseTable'];
    control.removeAt(i);
}
}
