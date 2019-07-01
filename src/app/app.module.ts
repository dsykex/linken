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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    CreateCodeComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    NgQRCodeReaderModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
