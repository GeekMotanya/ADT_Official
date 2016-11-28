import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientsService {

    urlRoute = 'http://192.168.33.10/adt_api/public/api/v1/';
    constructor(private http: Http) {

    }

    getService(){
        return this.http.get(this.urlRoute+'get_service')
            .map(res => res.json());
    }

    getStatus(){
        return this.http.get(this.urlRoute+'get_status')
            .map(res => res.json());
    }

    getRegimen(){
        return this.http.get(this.urlRoute+'get_regimen')
                   .map(res => res.json());
    }

    getProphylaxis(){
        return this.http.get(this.urlRoute+'get_prophylaxis')
                   .map(res => res.json());
    }

    getWho_stage(){
        return this.http.get(this.urlRoute+'get_who_stage')
                   .map(res => res.json());
    }
    getSource(){
        return this.http.get(this.urlRoute+'get_source')
                   .map(res => res.json());
    }

    getIllness(){
        return this.http.get(this.urlRoute+'get_illness')
                   .map(res => res.json());
    }


    getPatients() {
        return this.http.get(this.urlRoute+'patients')
            .map(res => res.json());
    }

    getPatient(){
        return this.http.get(this.urlRoute+"patients/2")
            .map(res => res.json());
    }

    addPatient(newPatient){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.urlRoute+'patients', JSON.stringify(newPatient), {headers : headers})
                    .map(res => res.json());
    }
    
}