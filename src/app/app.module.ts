import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmailsComponent } from './features/add-emails/add-emails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { WrongEmailsComponent } from './features/wrong-emails/wrong-emails/wrong-emails.component';
import { DisplayDataComponent } from './features/display-data/display-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmailsComponent,
    //WrongEmailsComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }