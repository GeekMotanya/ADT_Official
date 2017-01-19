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
    serverSide: true,
    ajax: {
      "url": 'http://192.168.133.10/adt-core/lib/public/ADT_CORE/v0.1/patients',
      "type": 'GET'
    },
    columns: [{data: 'ccc_number'}, {data: 'first_name'}, {data: 'enrollment_date'} , {data: 'phone_number'}, {data: 'is_tb_tested'}, {data: 'status'}],
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
                  <li><a href="/patients/dispense/${row['id']}">Dispense</a></li>
                  <li><a href="/patients/detail/${row['id']}">Detail</a></li>
                  <li><a href="/patients/edit/${row['id']}">Edit</a></li>
                  <li><a href="/disable/${row['id']}">Disable</a></li>
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
