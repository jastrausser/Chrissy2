import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppLoginDialogComponent } from './app-login-dialog/app-login-dialog.component';

export interface DialogData {
  user: string;
  password: string;
}

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})

export class AppLoginComponent implements OnInit {
  user: string;
  password: string; 

  constructor(public dialog: MatDialog) { }

  openDialog(): void{
    const dialogRef = this.dialog.open(AppLoginDialogComponent, {
      width: '300px',
      data: {user: this.user, password: this.password}
    });

    dialogRef.afterClosed().subscribe( addingString => console.log("LOGIN OUTPUTTTTT!!!!!!!!!!!!!!!!!!!: ", addingString));
  }

  ngOnInit() {
  }
}


