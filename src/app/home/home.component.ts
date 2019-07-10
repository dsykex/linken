import { Component, OnInit, NgZone, AfterContentInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from '../fb';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CodeService } from '../code.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  public user: any = {};
  public codes: Observable<any>;
  public qrImageData: any;

  constructor(public authService: AuthService, public codeService: CodeService, public zone: NgZone, public router: Router) { 

  }

  ngAfterContentInit() {
    this.authService.getUserInfo().then(user => {
      if(!user.email)
        this.router.navigateByUrl('/landing');
      else
        this.user = user;

     
        this.codeService.getUserCodes(this.user.email).then(data => {
          this.codes = data;
          console.log(data);
        });
  

    });
    
  }

  ngOnInit()
  {

  }

  renderCode(code)
  {
    this.qrImageData = code.data;
  }

  render(e)
  {
    console.log(e.result);
  }

  logout()
  {
    firebase.default.auth().signOut().then(()=> {
      this.router.navigateByUrl('landing');
    })
  }

}
