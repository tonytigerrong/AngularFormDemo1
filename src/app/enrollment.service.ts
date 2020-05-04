import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user'
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private _url: string = "http://localhost:3000/";
  constructor(private _http: HttpClient) { }
  enroll(user: User){
    return this._http.post<any>(this._url,user);
  }
}
