import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetOrderInfoService {
  private baseUrl:string = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
  ) { }

  getListForUser(token: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/order/list-for-user/${token}`);
  }
}
