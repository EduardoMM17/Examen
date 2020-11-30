import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  private baseUrl:string = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient,
  ) { }

  createUser(body) :Observable<any>{
    return this.http.post(this.baseUrl+'/user/create',body);
  }
}
