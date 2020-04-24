import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppDocumentsComponent } from './app-documents/app-documents.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material';
import { AppContactsComponent } from './app-contacts/app-contacts.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppLoginDialogComponent } from './app-login/app-login-dialog/app-login-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppFooterComponent } from './app-footer/app-footer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppIntroComponent } from './app-intro/app-intro.component';
import { AppFaqComponent } from './app-faq/app-faq.component';
import { AppContactDialogComponent } from './app-contacts/app-contact-dialog/app-contact-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppDocumentsComponent,
    AppContactsComponent,
    AppLoginComponent,
    AppLoginDialogComponent,
    AppFooterComponent,
    AppIntroComponent,
    AppFaqComponent,
    AppContactDialogComponent
    ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgbModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: [AppLoginDialogComponent, AppContactDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
