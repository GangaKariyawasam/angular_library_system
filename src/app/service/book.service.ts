import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookCustom} from "../model/BookCustom";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  searchBook(searchKey: string,pageSize: string, pageIndex: string):Observable<Array<BookCustom>>{
    return this.http.get<Array<BookCustom>>(`http://localhost:8080/api/v1/books/search`,{
      params: new HttpParams()
          .set('name',searchKey)
          .set('size',pageSize)
          .set('page',pageIndex)
    });
  }

}
