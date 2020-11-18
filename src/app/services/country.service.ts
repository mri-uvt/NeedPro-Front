import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  readonly rootURL = 'https://localhost:44382/api/countries';

  constructor(private http: HttpClient) { }  

  get(): Observable<country[]> {  
    return this.http.get<country[]>(this.rootURL);
  }  
}
