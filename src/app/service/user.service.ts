import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient
              ,private config:ConfigService) { }

  authenticate(uname:string,pwd:string):Observable<any>{
    const body = {
      username: uname,
      password: pwd
    }
    return this.http.post(`http://localhost:8080/api/v1/authenticate`,body,{
      responseType: 'text'
    });
  }
  getUser(): Observable<any>{
    const token = sessionStorage.getItem('token');
    const body = {
      jwt: token
    }
    if(token === null){
      return throwError('Invalid token');
    }else {
      return this.http.get(`http://localhost:8080/api/v1/users`,{
        params: new HttpParams().set('jwt',token),
        responseType: 'text'
      });
    }
  }
}
