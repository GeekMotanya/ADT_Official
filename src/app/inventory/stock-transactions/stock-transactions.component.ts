import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-transactions',
  templateUrl: './stock-transactions.component.html',
  styleUrls: ['./stock-transactions.component.css']
})
export class StockTransactionsComponent implements OnInit {

  stockTransactionsForm: FormGroup;

  get rows(): FormArray {
    return <FormArray>this.stockTransactionsForm.get('drugs');
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.stockTransactionsForm = this.fb.group({
      transaction_date: ['', Validators.required],
      transaction_type: ['', Validators.required],
      ref_no: ['', Validators.required],
      destination: ['', Validators.required],
      drugs: this.fb.array([this.buildRow()])
    });
  }

  buildRow(): FormGroup {
    return this.fb.group({
      drug_id: '',
      unit: '',
      pack_size: '',
      batch_number: '',
      expiry_date: '',
      packs: '',
      quantity: '',
      available_quantity: '',
      pack_cost: '',
      total: '',
      comment: ''
    });
  }

  addRow() {
    this.rows.push(this.buildRow());
  }

  removeRow(i: number) {
    // remove address from the list
    const control = <FormArray>this.stockTransactionsForm.controls['drugs'];
    control.removeAt(i);
  }

}
