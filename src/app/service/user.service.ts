import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {User} from "../model/User";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService{

  currentLoggedUser!:User;

  constructor(private http: HttpClient
              ,private config:ConfigService
              ,private router: Router) {}

  authenticate(uname:string,pwd:string):Observable<any>{
    const body = {
      username: uname,
      password: pwd
    }
    return this.http.post(`http://localhost:8080/api/v1/authenticate`,body,{
      responseType: 'text'
    });
  }

  getUser(): Observable<User>{
    const token = localStorage.getItem('token');
    if(token === null){
      return throwError('Invalid token');
    }else {
      return this.http.get<User>(`http://localhost:8080/api/v1/users`);
    }
  }
}
