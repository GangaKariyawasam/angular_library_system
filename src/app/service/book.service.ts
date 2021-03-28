import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookCustom} from "../model/BookCustom";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  searchBookByName(searchKey: string,pageSize: string, pageIndex: string):Observable<Array<BookCustom>>{
    return this.http.get<Array<BookCustom>>(`http://localhost:8080/api/v1/books/searchByName`,{
      params: new HttpParams()
          .set('name',searchKey)
          .set('size',pageSize)
          .set('page',pageIndex)
    });
  }
  searchBookByAuthor(searchKey: string,pageSize: string, pageIndex: string):Observable<Array<BookCustom>>{
    return this.http.get<Array<BookCustom>>(`http://localhost:8080/api/v1/books/searchByAuthor`,{
      params: new HttpParams()
          .set('name',searchKey)
          .set('size',pageSize)
          .set('page',pageIndex)
    });
  }
  searchBookCountByName(searchKey: string): Observable<number>{
    return this.http.get<number>(`http://localhost:8080/api/v1/books/searchCountByName`,{
      params: new HttpParams()
          .set('name',searchKey)
    });
  }
  searchBookCountByAuthor(searchKey: string): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/api/v1/books/searchCountByAuthor`, {
      params: new HttpParams()
          .set('name', searchKey)
    });
  }

}
