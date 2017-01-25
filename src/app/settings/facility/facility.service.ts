import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Facility } from './facility';

@Injectable()
export class FacilityService {

    private _apiUrl = 'http://192.168.33.10/adt-core/lib/public/ADT_CORE/v0.1/';

    private _faciltyApi = this._apiUrl + 'facility';

    constructor(private _http: Http) { }


    // Get

    getFacilityDetails(id: number) {
        return this._http.get(this._faciltyApi)
            .map((response: Response) => <Facility[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    // Put

    updateFacility(body: Object): Observable<Facility> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.put(`${this._faciltyApi}/${body['id']}`, body, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if a
    }

    // Error Handling

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let msg = `Status code ${error.status} on url ${error.url}`;
        console.error(msg);
        return Observable.throw(msg);
    }
}