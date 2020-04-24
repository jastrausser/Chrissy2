import { Component, OnInit } from '@angular/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@Component({
  selector: 'app-app-documents',
  styleUrls: ['./app-documents.component.css'],
  templateUrl: './app-documents.component.html'
  
})
export class AppDocumentsComponent implements OnInit {

  constructor() { }
  //List of 
  pdfSrc="./assets/camp_confirmation.pdf";
  pdfSrc2="./assets/Itinerary.pdf";
  pdfSrc3="./assets/Tornado.pdf";

  ngOnInit() {
  }
}

