import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility-users',
  templateUrl: './facility-users.component.html',
  styleUrls: ['./facility-users.component.css']
})
export class FacilityUsersComponent implements OnInit {

  constructor() { }

   tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/facility.dummy.json',
    columns: [{ data: 'name' }, {data: 'email_address'}, {data: 'phone_no'}, {data: 'access_level'}, {data: 'registered_by'}],
    "columnDefs": [
      {
        // The `data` parameter refers to the data for the cell (defined by the
        // `data` option, which defaults to the column being worked with, in
        // this case `data: 0`.
        "render": function (data, type, row) {
          return `
               <div>
               <button class="btn btn-primary"> Edit	</button>  
               <button class="btn btn-primary"> Disable	</button>              
              </div>
              `
          // return '<a class="btn btn-primary btn-xs" href="patients/dispense/' + row['id'] + '">Dispense</a> <a class="btn btn-primary btn-xs" href="patients/view/' + row['id'] + '">Detail</a>'
        },
        // NOTE: Targeting the [actions] column.
        "targets": 5
      },
      { "targets": 0 }
    ],
    responsive: true
  }

  ngOnInit() {
  }

}
