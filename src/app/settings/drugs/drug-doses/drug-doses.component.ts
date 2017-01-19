import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-doses',
  templateUrl: './drug-doses.component.html',
  styleUrls: ['./drug-doses.component.css']
})
export class DrugDosesComponent implements OnInit {

  constructor() { }

  tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/drugs.dummy.json',
    columns: [{ data: 'dose' }, { data: 'value' }, { data: 'frequency' }],
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
        "targets": 3
      },
      { "targets": 0 }
    ],
    responsive: true
  }

  ngOnInit() {
  }

}
