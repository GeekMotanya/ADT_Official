import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Patient, Illness, Allergies, Source, Service, date, Locations, FamilyPlanning } from './patients';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientsService {

    // To be placed in a config file
    private _apiUrl = 'http://41.89.6.210/adt-core/lib/public/ADT_CORE/v0.1/';

    private _addPatientRoute = this._apiUrl + 'patients';
    private _illnessApi = this._apiUrl + 'lists/illnesses';
    private _allergiesApi = this._apiUrl + 'lists/allergies';
    private _sourcesApi = this._apiUrl + 'lists/patientsources';
    private _servicesApi = this._apiUrl + 'lists/services';
    private _regimenApi = this._apiUrl + 'lists/regimen';
    private _prophylaxisApi = this._apiUrl + 'lists/prophylaxis';
    private _whoStageApi = this._apiUrl + 'lists/whostage';
    private _pepReasonApi = this._apiUrl + 'lists/pep';
    private _locationsApi = this._apiUrl + '/lists/sub_county';
    private _familyPlanning = this._apiUrl + '/lists/familyplanning';
    constructor(private _http: Http) { }

    /**
     * GET Section
     */

    getFamilyPlan() {
        return this._http.get(this._servicesApi)
            .map((response: Response) => <FamilyPlanning[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPatients() {
        return this._http.get(this._addPatientRoute)
            .map((response: Response) => <Patient[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPatient(id: number) {
        return this._http.get(this._addPatientRoute + `/${id}`)
            .map((response: Response) => <Patient[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getLocation() {
        return this._http.get(this._servicesApi)
            .map((response: Response) => <Locations[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getService() {
        return this._http.get(this._servicesApi)
            .map((response: Response) => <Service[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getRegimen() {
        return this._http.get(this._regimenApi)
            .map(res => res.json());
    }

    getProphylaxis() {
        return this._http.get(this._prophylaxisApi)
            .map(res => res.json());
    }

    getWho_stage() {
        return this._http.get(this._whoStageApi)
            .map(res => res.json());
    }
    getSource() {
        return this._http.get(this._sourcesApi)
            .map((response: Response) => <Source[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }



    getIllness(): Observable<Illness[]> {
        return this._http.get(this._illnessApi)
            .map((response: Response) => <Illness[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAllergies(): Observable<Allergies[]> {
        return this._http.get(this._allergiesApi)
            .map((response: Response) => <Allergies[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    /**
     * POST Section
     */
    // addPatient(newPatient: any) {
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json; charset=utf-8');
    //     console.log(newPatient);
    //     return this._http.post(this._addPatientRoute, JSON.stringify(newPatient), { headers: headers })
    //         .map((res: Response) => res.json())
    //         .subscribe(
    //         () => { },
    //         err => console.error(err)
    //         )
    // }

    // Add a new comment
    addPatient(body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString)
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this._addPatientRoute, body, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let msg = `Status code ${error.status} on url ${error.url}`;
        console.error(msg);
        return Observable.throw(msg);
    }
}