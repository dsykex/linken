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
  msg: string;

  constructor(public authService: AuthService, public codeService: CodeService, public zone: NgZone, public router: Router) { 
    /*aqr.create({
      text: 'Awesome-qr makes the QR code awesome!',
      size: 800,
      backgroundImage: 'http://localhost:4201/assets/img/logo.png',
      callback: data => {
        console.log(data);
      },
      bindElement: 'img-qrcode'
   });*/
   //console.log(AwesomeQRCode);
  }

  ngAfterContentInit() {
    this.msg = `The following vanilla experience opens up with Stino vs Sodapoppin in a duel that ends in less than 6 seconds. Enjoy this wow classic funniest moments episode 19.
    The following vanilla experience opens up with Stino vs Sodapoppin in a duel that ends in less than 6 seconds. Enjoy this wow classic funniest moments episode 19.
    The following vanilla experience opens up with Stino vs Sodapoppin in a duel that ends in less than 6 seconds. Enjoy this wow classic funniest moments episode 19.`

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
