import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Illness } from './patients';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientsService {

    urlRoute = 'http://192.168.33.10/adt_api/public/api/v1/';
    private _illnessApi = '../../assets/api/patients/illnesses.json';
    constructor(private _http: Http) {

    }

    getService() {
        return this._http.get(this.urlRoute + 'get_service')
            .map(res => res.json());
    }

    getStatus() {
        return this._http.get(this.urlRoute + 'get_status')
            .map(res => res.json());
    }

    getRegimen() {
        return this._http.get(this.urlRoute + 'get_regimen')
            .map(res => res.json());
    }

    getProphylaxis() {
        return this._http.get(this.urlRoute + 'get_prophylaxis')
            .map(res => res.json());
    }

    getWho_stage() {
        return this._http.get(this.urlRoute + 'get_who_stage')
            .map(res => res.json());
    }
    getSource() {
        return this._http.get(this.urlRoute + 'get_source')
            .map(res => res.json());
    }

    // getIllness() {
    //     return this._http.get(this.urlRoute + 'get_illness')
    //         .map(res => res.json());
    // }


    getPatients() {
        return this._http.get(this.urlRoute + 'patients')
            .map(res => res.json());
    }

    getPatient() {
        return this._http.get(this.urlRoute + "patients/2")
            .map(res => res.json());
    }

    addPatient(newPatient) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.urlRoute + 'patients', JSON.stringify(newPatient), { headers: headers })
            .map(res => res.json());
    }

    getIllness(): Observable<Illness[]> {
        return this._http.get(this._illnessApi)
            .map((response: Response) => <Illness[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}