import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-author-registration',
  templateUrl: './author-registration.component.html',
  styleUrls: ['./author-registration.component.scss']
})
export class AuthorRegistrationComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AuthorRegistrationComponent>) { }

  ngOnInit(): void {
  }

    onFormClose() {
      this.dialogRef.close();
    }
}
