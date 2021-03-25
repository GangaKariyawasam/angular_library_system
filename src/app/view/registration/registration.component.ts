import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RegistrationComponent>) { }

  show = true;
  hide: any = true;
  years: number[] = [];
  selectedYear = new Date().getFullYear();
  selectedSection = 'A';
  sections: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  ngOnInit(): void {
    for (let year = 2015; year < 2100; year++){
      this.years.push(year);
    }
  }

  test(): void {
    alert(this.selectedYear);
  }

  deleteProfileImage(): void {
    alert('Delete profile image');
  }

  editProfilePhoto(): void {
    alert('Edit profile image');
  }

  getSection(): void {
    alert(this.selectedSection);
  }
  onFormClose() {
    this.dialogRef.close();
  }

  submitForm() {
    alert("Form Submitted");
    this.onFormClose();
  }
}
