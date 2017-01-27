import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Regimen } from '../patients';

@Injectable()
export class DispenseService {

    private _apiUrl = 'assets/api/patients/dispense.dummy.json';

    constructor(private _http: Http) { }

    /**
     * GET
     */
    getRegimenDrugs() {
        return this._http.get(this._apiUrl)
                   .map((res: Response)=> <any[]>res.json()) // TODO: refactor this. Bad practice
                //    .do(data => console.log('Service: ' + JSON.stringify(data)))
                   .catch(this.handleError);
    }

    // Loops through the lists of services to get individual service properties
    // such as different regimens

    getRegimen(id: number): Observable<any> {
        return this.getRegimenDrugs()
            .map((service: Regimen[]) => service.find(regimen => regimen.id === id))
            .do(data => console.log('Service: ' + JSON.stringify(data)));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let msg = `Status code ${error.status} on url ${error.url}`;
        console.error(msg);
        return Observable.throw(msg);
    }
}