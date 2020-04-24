import { Component, OnInit, Inject, NgModule, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  user: string;
  password: string;
}

@Component({
  selector: 'app-app-login-dialog',
  templateUrl: './app-login-dialog.component.html',
  styleUrls: ['./app-login-dialog.component.css']
})
export class AppLoginDialogComponent implements OnInit {
  user: string;
  password: string;
  logInfo: string;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

  onOkClick(){
    this.dialogRef.close(this.user + " " + this.password);
  }

  constructor(
    public dialogRef: MatDialogRef<AppLoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
