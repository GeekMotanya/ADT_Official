import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Sources } from '../facility';
import { FacilityService } from '../facility.service';

@Component({
  selector: 'app-facility-patient-sources',
  templateUrl: './facility-patient-sources.component.html',
  styleUrls: ['./facility-patient-sources.component.css']
})
export class FacilityPatientSourcesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private _router: Router,
    private _facilityService: FacilityService) { }

  source = new Sources();

  ngOnInit() {
    this._facilityService.getSources().subscribe(sources => this.source = sources);
  }

}
