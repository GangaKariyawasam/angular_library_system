import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {StudentService} from '../../service/student.service';
import {ConfigService} from "../../service/config.service";
import {StudentComponent} from "../dash-board/student/student.component";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RegistrationComponent>,
              public studentService: StudentService
              ,private config: ConfigService) { }

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
    if(this.studentService.form.valid){
      alert(JSON.stringify(this.studentService.form.value))
      this.studentService.saveStudent(this.studentService.form.value).subscribe(value => {
        this.studentService.students.unshift(this.studentService.form.value);
        this.studentService.dataSource.data = this.studentService.students;
        this.config.toastMixin.fire({
          icon: 'success',
          title: 'Successfully saved the student'
        });
      },error => {
        this.config.toastMixin.fire({
          icon: 'error',
          title: 'Failed to save the student'
        });
      })
    }
  }
}
