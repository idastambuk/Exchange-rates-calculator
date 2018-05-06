import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RatesService {

	constructor(
		private http: Http,
		private router: Router
	) { }

    //Get exchange rates

    getRates(date, base) {
        return this.http.get(`${BASE_URL}${date}/`, {params: base? {base : base} : ''})
            .map(res => (<Response>res).json())
            .catch((err: Response) => {
                return Observable.throw(err.json());
            });
    }
}

