import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.css'],
  providers: [DatePipe]
})
export class DispenseComponent implements OnInit {

  // TODO: Remove this segment
  public ctrl: number;

  // Datepicker properties
  date_options: Object = {
    dateFormat: 'mm/dd/yy',
    changeMonth: true,
    changeYear: true,
    beforeShowDay: $.datepicker.noWeekends
  }

  setdate: Date;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() { }
  /**
   * Get users input, add the number of days and
   * set date picker to use the current date
   * Refer to this article: 
   * http://www.htmlgoodies.com/html5/javascript/calculating-the-difference-between-two-dates-in-javascript.html#fbid=2-vGKw3DAdn
   */
  nextAppointment(val) {
    let date = new Date();
    this.setdate = new Date(date.setTime(date.getTime() + Number(val) * 86400000)); // sets the next appointment based using milliseconds.
    this.datePipe.transform(this.setdate, 'MM/dd/y'); // using angular's built in date pipe to format date object.
  }
  /**
   * Date difference
   */
  dateDiff (todate) {
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
