import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Supporters } from '../facility';
import { FacilityService } from '../facility.service';

@Component({
  selector: 'app-facility-supporters',
  templateUrl: './facility-supporters.component.html',
  styleUrls: ['./facility-supporters.component.css']
})
export class FacilitySupportersComponent implements OnInit {

  errorMessage: string;
  supporters: Supporters[];
  jQuery: any;

  constructor(private _facilityService: FacilityService, private router: Router) { }

  supportersForm: NgForm;

  ngOnInit() {
    this._facilityService.getSupporters().subscribe(supporters => this.supporters = supporters)    
  }

  get diagnostic() {
    return JSON.stringify(this.supporters);
  }


}
