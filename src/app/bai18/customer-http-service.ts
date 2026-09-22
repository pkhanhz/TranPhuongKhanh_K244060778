import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomerGroup } from './ICustomerGroup';

@Injectable({
    providedIn: 'root'
})
export class CustomerHttpService {

    private _url: string = '/datasets/customers.json';

    constructor(private _http: HttpClient) { }

    getCustomers(): Observable<ICustomerGroup[]> {
        return this._http.get<ICustomerGroup[]>(this._url);
    }
}