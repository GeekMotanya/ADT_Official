import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User, Facility } from '../facility';
import { FacilityService } from '../facility.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-facility-users',
  templateUrl: './facility-users.component.html',
  styleUrls: ['./facility-users.component.css']
})
export class FacilityUsersComponent implements OnInit {

  usersList: User[];
  user = new User();
  jQuery: any;

  constructor(private route: ActivatedRoute,
    private _router: Router, 
    private _facilityService: FacilityService) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this._facilityService.getFacilityUsers())
      .subscribe(data => this.usersList = data);    
  }

  onSubmit(): void {
    this._facilityService.addFacilityUser(this.user).subscribe(
      () => this.onSaveComplete(),
      error => console.log(error)
    );
  }

  onSaveComplete() {
    console.log('Created a new user...');
    jQuery("#newUser").modal("hide");
    this._facilityService.getSupporters().subscribe(data => this.usersList = data);
  }

  get diagnostic() {
    return JSON.stringify(this.usersList);
  }

}
