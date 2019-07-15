import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { CreateCodeComponent } from './create-code/create-code.component';
import { CodePickerComponent } from './code-picker/code-picker.component';

const routes: Routes = [
  {path: '', redirectTo:'/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'home', component: HomeComponent}, 
  {path: 'create-code', component: CreateCodeComponent},
  {path: 'code-picker', component: CodePickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
