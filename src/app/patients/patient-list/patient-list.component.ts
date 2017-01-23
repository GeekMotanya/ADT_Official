import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Patient } from '../patients';
import { PatientsService } from '../patients.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit, DoCheck {

  patients: Patient[];
  
  public currentPage: number = 1;



  constructor (protected service: PatientsService) { }

  ngOnInit() {
    this.service.getPatients().subscribe(p => this.patients = p);
  }

  ngDoCheck() {
    // this.totalItems = this.patients.length;
  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
 
  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}
