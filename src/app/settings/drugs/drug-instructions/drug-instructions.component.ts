import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug-instructions',
  templateUrl: './drug-instructions.component.html',
  styleUrls: ['./drug-instructions.component.css']
})
export class DrugInstructionsComponent implements OnInit {

  constructor() { }

  tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/drugs.dummy.json',
    columns: [{ data: 'instruction' }],
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
