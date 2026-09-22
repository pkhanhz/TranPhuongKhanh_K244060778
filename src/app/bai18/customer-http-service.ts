import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerHttpService {

    private url = '/datasets/customers.json';

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<any> {
        return this.http.get<any>(this.url);
    }
}