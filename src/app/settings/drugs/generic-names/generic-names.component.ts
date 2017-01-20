import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-names',
  templateUrl: './generic-names.component.html',
  styleUrls: ['./generic-names.component.css']
})
export class GenericNamesComponent implements OnInit {

  constructor() { }

  tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/drugs.dummy.json',
    columns: [{ data: 'generic_names' }],
    "columnDefs": [
      {
        "render": function (data, type, row) {
          return `
               <div>
               <button class="btn btn-primary"> Edit	</button>  
               <button class="btn btn-danger"> Disable	</button>              
              </div>
              `
        },
        "targets": 1
      },
      { "targets": 0 }
    ],
    responsive: true
  }

  ngOnInit() {
  }

}
