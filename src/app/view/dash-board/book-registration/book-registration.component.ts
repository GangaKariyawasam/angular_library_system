import { Component, OnInit } from '@angular/core';
import {BookRegistrationService} from '../../../service/book-registration.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {newGrade} from "../student-registration/student-registration.component";
import {Author} from "../../../model/Author";
import {MatDialogRef} from "@angular/material/dialog";
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.scss']
})
export class BookRegistrationComponent implements OnInit {

  dropdownList: Array<Author> = [];
  selectedItems: Array<Author> = [];
  dropdownSettings!:IDropdownSettings;

  constructor(private dialogRef: MatDialogRef<BookRegistrationComponent>
              ,public bookRegistrationService: BookRegistrationService) { }


  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.getAllGrades();
  }

  getAllGrades(): void{
    this.dropdownList.push({id:1,name:'martin wickramasinghe'});
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onFormClose() {
    this.dialogRef.close();
  }

  submitForm() {
    if (this.bookRegistrationService.form.valid){
      let studentObj = this.bookRegistrationService.form.value;
    }
  }

  deleteProfileImage(): void {
    alert('Delete Profile Image');
  }

  editProfilePhoto(): void {
    alert('Edit Profile Image');
  }

}
