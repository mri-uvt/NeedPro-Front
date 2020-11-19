import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { speciality } from '../models/speciality';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  readonly rootURL = 'https://localhost:44382/api/Specialities';

  constructor(private http: HttpClient) { }  

  get(): Observable<speciality[]> {  
    return this.http.get<speciality[]>(this.rootURL);
  }
}
