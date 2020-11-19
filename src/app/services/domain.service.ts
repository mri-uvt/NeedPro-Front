import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { domain } from '../models/domain';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  readonly rootURL = 'https://localhost:44382/api/Domains';

  constructor(private http: HttpClient) { }  

  get(): Observable<domain[]> {  
    return this.http.get<domain[]>(this.rootURL);
  }  
}
