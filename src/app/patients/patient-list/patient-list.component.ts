import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {

  // Datatable options
  tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/patients.dummy.json',
    columns: [{data: 'ccc_no'}, {data: 'patient_name'}, {data: 'next_appointment'} , {data: 'phone'}, {data: 'current_regimen'}, {data: 'status'}],
    "columnDefs": [
          {
            // The `data` parameter refers to the data for the cell (defined by the
            // `data` option, which defaults to the column being worked with, in
            // this case `data: 0`.
            "render": function (data, type, row) {
              return `
               <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Options
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><a href="/dispense/${row['ccc_no']}">Dispense</a></li>
                  <li><a href="/detail/${row['ccc_no']}">Detail</a></li>
                  <li><a href="/edit/${row['ccc_no']}">Edit</a></li>
                  <li><a href="/disable/${row['ccc_no']}">Disable</a></li>
                </ul>
              </div>
              `
              // return '<a class="btn btn-primary btn-xs" href="patients/dispense/' + row['id'] + '">Dispense</a> <a class="btn btn-primary btn-xs" href="patients/view/' + row['id'] + '">Detail</a>'
            },
            // NOTE: Targeting the [actions] column.
            "targets": 6
          },
          { "width": "10%", "targets": 0 }
        ],       
    responsive: true
  }

  ngOnInit() {

  }
}
