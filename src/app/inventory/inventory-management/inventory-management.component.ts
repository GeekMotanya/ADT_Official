import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent implements OnInit {

  tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/datatable_inventory.json',
    columns: [{ data: 'commodity' }, { data: 'generic_name' }, { data: 'qty' }, { data: 'unit' }, { data: 'size' }, { data: 'supplier' }, { data: 'dose' }],
    "columnDefs": [
          {
            // The `data` parameter refers to the data for the cell (defined by the
            // `data` option, which defaults to the column being worked with, in
            // this case `data: 0`.
            "render": function (data, type, row) {
              // return '<a class="btn btn-primary btn-xs" href="patients/dispense/' + row['ccc_no'] + '">Dispense</a> <a class="btn btn-primary btn-xs" href="patients/view/' + row['ccc_no'] + '">Detail</a>'
              return '<a class="btn btn-primary" href="inventory/bin-card/' + row['id'] + '">Bin card</a>'
            },
            // NOTE: Targeting the [actions] column.
            "targets": 7
          }
        ]
}

  constructor() { }

  ngOnInit() {
  }

}
