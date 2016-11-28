import {Component, ViewContainerRef} from '@angular/core';
// import './rxjs-operators';

import { PatientsService} from './patients/patients.service';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  providers: [PatientsService]
})
export class AppComponent {
  title = 'app works!';

  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }

}
