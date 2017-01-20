import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pep-reasons',
  templateUrl: './pep-reasons.component.html',
  styleUrls: ['./pep-reasons.component.css']
})
export class PepReasonsComponent implements OnInit {

  constructor() { }

  tableOptions: Object = {
    colReorder: true,
    ajax: 'assets/api/tables/others.dummy.json',
    columns: [{ data: 'pep_reason' }],
    "columnDefs": [
      {
        // The `data` parameter refers to the data for the cell (defined by the
        // `data` option, which defaults to the column being worked with, in
        // this case `data: 0`.
        "render": function (data, type, row) {
          return `
               <div>
               <button class="btn btn-primary" data-toggle="modal" data-target="#editReason"> Edit	</button>  
               <button class="btn btn-danger"> Disable	</button>
               <div id="editReason" class="modal fade" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title">Edit PEP Reason</h4>
                    </div>
                    <div class="modal-body">
                      <form>
                        <label>Reason</label>
                        <p><input type="text" class="form-control" style="width:100%"></p>
                        <button class="btn btn-primary" type="submit"><i class="fa fa-save"></i> Update	</button>
                        <button class="btn btn-primary" data-dismiss="modal"> Cancel	</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>              
              </div>
              `
          // return '<a class="btn btn-primary btn-xs" href="patients/dispense/' + row['id'] + '">Dispense</a> <a class="btn btn-primary btn-xs" href="patients/view/' + row['id'] + '">Detail</a>'
        },
        // NOTE: Targeting the [actions] column.
        "targets": 1
      },
      { "targets": 0 }
    ],
    responsive: true
  }

  ngOnInit() {
  }

}
