import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Patient } from '../patients';
import { PatientsService } from '../patients.service';
import 'rxjs/add/operator/switchMap';
declare var $: any;

@Component({
  selector: 'app-dispense',
  templateUrl: './patient-dispense.component.html',
  providers: [DatePipe]
})
export class PatientDispenseComponent implements OnInit {

  // TODO: Remove this segment
  public ctrl: number;

  patient = new Patient();

  // Datepicker properties
  date_options: Object = {
    dateFormat: 'mm/dd/yy',
    changeMonth: true,
    changeYear: true,
    beforeShowDay: $.datepicker.noWeekends // Disables weekends in the calendar
  }

  setdate: Date;

  constructor(
    private _datePipe: DatePipe,
    private _route: ActivatedRoute,
    private _router: Router,
    private _patientService: PatientsService
  ) { }

  ngOnInit() {
    // Passing an id to a router
    this._route.params
      .switchMap((params: Params) => this._patientService.getPatient(+params['id']))
      .subscribe(patient => this.patient = patient);
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
}
