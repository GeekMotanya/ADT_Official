import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-destinations',
  templateUrl: './drug-destinations.component.html',
  styleUrls: ['./drug-destinations.component.css']
})
export class DrugDestinationsComponent implements OnInit {

  constructor() { }

  tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/drugs.dummy.json',
    columns: [{ data: 'destinations' }],
    "columnDefs": [
      {
        "render": function (data, type, row) {
          return `
               <div>
               <button class="btn btn-primary"> Edit	</button>  
               <button class="btn btn-primary"> Disable	</button>              
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
