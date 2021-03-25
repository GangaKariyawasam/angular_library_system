import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor() {
  }

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
}
