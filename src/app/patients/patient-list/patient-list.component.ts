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

  patients: any;
  binding: string;
  public currentPage: number = 1;



  constructor (protected service: PatientsService) { }

  ngOnInit() {
    this.service.getPatients().subscribe(p => this.patients = p);
    console.log('I got: '+ this.patients)
  }
  

  ngDoCheck() {
    // this.totalItems = this.patients.length;
    // console.log(this.patients.data)
  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
 
  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    this.service.getPaginatedPatients(event.page).subscribe(p => this.patients = p); // TODO: Error handling
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  disable(val) {
    this.service.disablePatient(val).subscribe(
                () => this.service.getPatients().subscribe(p => this.patients = p),
                (error) => { console.log("Error happened" + error) },
                () => { console.log("the subscription is completed") }
            );
  }
}
