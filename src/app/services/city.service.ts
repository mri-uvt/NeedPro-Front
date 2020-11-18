import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { city } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  readonly rootURL = 'https://localhost:44382/api/cities';

  constructor(private http: HttpClient) { }  

  get(): Observable<city[]> {  
    return this.http.get<city[]>(this.rootURL);
  }  

  // postPaymentDetail() {
  //   return this.http.post(`${this.rootURL}/PaymentDetail`, this.formData);
  // }
  // putPaymentDetail() {
  //   return this.http.put(`${this.rootURL}/PaymentDetail/${this.formData.PMId}`, this.formData);
  // }
  // deletePaymentDetail(id) {
  //   return this.http.delete(`${this.rootURL}/PaymentDetail/${id}`);
  // }

  // refreshList() {
  //   this.http.get(`${this.rootURL}/PaymentDetail/`)
  //     .toPromise()
  //     .then(res => this.list = res as PaymentDetail[]);
  // }
  

}
