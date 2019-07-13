import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { CreateCodeComponent } from './create-code/create-code.component';
import { CodeDetailsComponent } from './code-details/code-details.component';
import {AngularFireModule} from '@angular/fire';
import { CodePickerComponent } from './code-picker/code-picker.component';

export const fbConfig = {
    apiKey: "AIzaSyAIcvfYspNPfT0pnSZR3qV8WcBrH3S3hyY",
    authDomain: "linken-25010.firebaseapp.com",
    databaseURL: "https://linken-25010.firebaseio.com",
    projectId: "linken-25010",
    storageBucket: "linken-25010.appspot.com",
    messagingSenderId: "928580850321",
    appId: "1:928580850321:web:36dcc200d4193237"
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    CreateCodeComponent,
    CodeDetailsComponent,
    CodePickerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fbConfig),
    NgxQRCodeModule,
    NgQRCodeReaderModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
