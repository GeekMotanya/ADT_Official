import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-names',
  templateUrl: './brand-names.component.html',
  styleUrls: ['./brand-names.component.css']
})
export class BrandNamesComponent implements OnInit {

  constructor() { }

  tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/drugs.dummy.json',
    columns: [{ data: 'brand_names' }],
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
