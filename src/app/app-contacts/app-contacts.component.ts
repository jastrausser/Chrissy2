import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import data from '../data.json';
import { AppContactDialogComponent } from './app-contact-dialog/app-contact-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NgIf, JsonPipe } from '@angular/common';
import { AppLoginDialogComponent } from '../app-login/app-login-dialog/app-login-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButton} from '@angular/material/button';
import {saveAs} from 'file-saver';

export interface DialogData1{
  number: string;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-app-contacts',
  templateUrl: './app-contacts.component.html',
  styleUrls: ['./app-contacts.component.css']
})

export class AppContactsComponent implements OnInit{

  Users: any =data;
  number: string;
  name: string;
  phone: string;
  addingString:string = "";
  file: Blob = this.Users;
  jsonString = "[";

  constructor(public dialog1: MatDialog, public dialog2:MatDialog, public snackBar: MatSnackBar) {}
  ngOnInit(){
  }
  
  openDialog1():void{

    const dialogRef1 = this.dialog1.open(AppLoginDialogComponent, {width: '300px',
        data: {}
    });
    dialogRef1.afterClosed().subscribe( userPass => this.checkAdmin(userPass));    
  }

  checkAdmin(userPass:string){
    //if the user enters in the correct information
    if(userPass == 'admin password'){
      //open next dialog
      const dialogRef2 = this.dialog2.open(AppContactDialogComponent, 
          {width: '300px', data: {number: this.number, name: this.name, phone: this.phone}
        });
        //run function once string is brought in from the dialog
        dialogRef2.afterClosed().subscribe( addingString => this.addToJSON(addingString));
    }
    else{
      //Come on Jon, wrong password!
      this.snackBar.open("Incorrect username and/or password!", "Ok", {duration:2000});
    }  
  }

  getStringOfData(){
    //for loop to create a string that reads in info
    for(var users of this.Users){
      this.jsonString = this.jsonString + "{ \n\"number\": \"" + users.number + "\",\n\"name\": \"" + users.name +"\" ,\n\"phone\": \"" + users.phone + "\" \n }, \n";
    } 
  }

  addToJSON(dialogData: string){
    this.getStringOfData();
    this.jsonString = this.jsonString + dialogData + "\n]"    
    //now export/save file!
    this.saveFile();
    
  }

  saveFile() {
    var FileSaver = require('file-saver');
    var blob = new Blob([this.jsonString], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "data.json");
    console.log(this.jsonString);
  }
}
