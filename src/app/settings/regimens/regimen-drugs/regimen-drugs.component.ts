import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regimen-drugs',
  templateUrl: './regimen-drugs.component.html',
  styleUrls: ['./regimen-drugs.component.css']
})
export class RegimenDrugsComponent implements OnInit {

  constructor() { }

  tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/regimen.dummy.json',
    columns: [{data: 'regimen'}, {data: 'type_of_service'}],
    "columnDefs": [
          {
            // The `data` parameter refers to the data for the cell (defined by the
            // `data` option, which defaults to the column being worked with, in
            // this case `data: 0`.
            "render": function (data, type, row) {
              return `
               <div>
               <button class="btn btn-primary"> View List of Drugs	</button>                
              </div>
              `
              // return '<a class="btn btn-primary btn-xs" href="patients/dispense/' + row['id'] + '">Dispense</a> <a class="btn btn-primary btn-xs" href="patients/view/' + row['id'] + '">Detail</a>'
            },
            // NOTE: Targeting the [actions] column.
            "targets": 2
          },
          { "targets": 0 }
        ],       
    responsive: true
  }


  ngOnInit() {
  }

}
