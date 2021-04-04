import { Injectable } from '@angular/core';
import {BookCustom} from "../model/BookCustom";
import {MatTableDataSource} from "@angular/material/table";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BookRegistrationService {

  book!: BookCustom[];
  dataSource = new MatTableDataSource<BookCustom>()

  constructor() { }

  form: FormGroup = new FormGroup({
    bookId: new FormControl('',[Validators.required]),
    englishName: new FormControl('',[Validators.required]),
    sinhalaName: new FormControl('',[Validators.required]),
    year: new FormControl('',[Validators.pattern('^[12][0-9]{3}$')]),
    price: new FormControl('',[Validators.pattern('^[0-9]*$')]),
    medium: new FormControl('',[Validators.required]),
    pages: new FormControl('',[Validators.pattern('^[0-9]*$')]),
    note: new FormControl(''),
    image: new FormControl(''),
    author: new FormControl('',[Validators.required]),
    categories: new FormControl('',[Validators.required]),
  })

  get bookRegisterFormControl(){
    return this.form.controls;
  }
}
