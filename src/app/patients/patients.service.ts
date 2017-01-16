import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Illness, Allergies, Source, Service, date } from './patients';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientsService {

    // To be placed in a config file
    private _apiUrl = 'http://192.168.133.10/adt-core/lib/public/ADT_CORE/v0.1/';

    private _addPatientRoute = this._apiUrl+'patients';
    private _illnessApi = this._apiUrl+'lists/illnesses';
    private _allergiesApi = this._apiUrl+'lists/allergies';
    private _sourcesApi = this._apiUrl+'lists/patientsources';
    private _servicesApi = this._apiUrl+'services';
    private _regimenApi = this._apiUrl+'lists/regimen';
    private _prophylaxisApi = this._apiUrl+'lists/prophylaxis';
    private _whoStageApi = this._apiUrl+'lists/whostage';
    private _pepReasonApi = this._apiUrl+'lists/pep';

    constructor(private _http: Http) { }

    /**
     * GET Section
     */

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
    addPatient(newPatient: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        console.log(newPatient);
        return this._http.post(this._addPatientRoute, JSON.stringify(newPatient), { headers: headers })
            .map((res: Response) => res.json())
            .subscribe(
            () => { },
            err => console.error(err)
            )
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let msg = `Status code ${error.status} on url ${error.url}`;
        console.error(msg);
        return Observable.throw(msg);
    }

    calculateDate(value: any): date {
        let dob: any = new Date(value);
        let today: any = new Date();
        let age_in_years: number;
        let age_in_months: number;

        age_in_years = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
        var y1 = today.getFullYear();
        var y2 = dob.getFullYear();
        age_in_months = (today.getMonth() + y1 * 12) - (dob.getMonth() + y2 * 12);

        return {
            "months": age_in_months,
            "years": age_in_years
        };
    }
}