import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {
  private baseUrl:string = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
  ) { }

  createOrder(token, items) :Observable<any>{
    return this.http.post(this.baseUrl+'/order/create', {token, items});
  }
}
