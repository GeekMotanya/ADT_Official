import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-codes',
  templateUrl: './drug-codes.component.html',
  styleUrls: ['./drug-codes.component.css']
})
export class DrugCodesComponent implements OnInit {

  constructor() { }

  tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/drugs.dummy.json',
    columns: [{ data: 'drug' }, { data: 'unit' }, { data: 'dose' }, { data: 'supplier' }],
    "columnDefs": [
      {
        "render": function (data, type, row) {
          return `
               <div>
               <button class="btn btn-primary"> Edit	</button>  
               <button class="btn btn-danger"> Disable	</button>  
               <button class="btn btn-success"> Merge	</button>            
              </div>
              `
        },
        "targets": 4
      },
      { "targets": 0 }
    ],
    responsive: true
  }

  ngOnInit() {
  }

}
