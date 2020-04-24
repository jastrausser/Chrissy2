import { Component, OnInit, Inject, NgModule, Output, EventEmitter, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface DialogData1 {
  number: string;
  name: string;
  phone: string;
}
//message = ",{ 'number': " + this.number + ", 'name': '" + this.name + "', 'phone': '" + this.phone + "' }";

@Component({
  selector: 'app-app-contact-dialog',
  templateUrl: './app-contact-dialog.component.html',
  styleUrls: ['./app-contact-dialog.component.css']
})
export class AppContactDialogComponent implements OnInit {
  
//DONT TOUCH THESE VARIABLES
  number: string;
  name: string;
  phone: string;
  addString: string;

  constructor(
    public dialogRef1: MatDialogRef<AppContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {this.name = data.name;}

  ngOnInIt(){
  }

  onOkClick1() {
    //formatting the data into a string that makes sense
    this.addString = "{ \n\"number\": \"" + this.number + "\",\n\"name\": \"" + this.name +"\" ,\n\"phone\": \"" + this.phone + "\" \n } \n";
    //sending the actual message here: 
    this.dialogRef1.close(this.addString);
  }

  //works dont touch
  onNoClick1(){
    this.dialogRef1.close();
  }

  ngOnInit() {  }
  
 
}
