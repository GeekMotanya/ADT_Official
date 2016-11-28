import {Component, OnInit, OnDestroy} from '@angular/core';
import {JsonApiService} from "../shared/api/json-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public chartjsData: any;

  constructor(private jsonApiService: JsonApiService) { 
    this.jsonApiService.fetch( '/graphs/chartjs.json').subscribe((data)=>{
      this.chartjsData = data;
    })
  }

  ngOnInit() {
  }

}
