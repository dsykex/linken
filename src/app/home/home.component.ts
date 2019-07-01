import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from '../fb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: any = {};

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getUserInfo().then(user => {
      if(!user.email)
        this.router.navigateByUrl('/landing');
      else
        this.user = user;
    
    })
  }

  logout()
  {
    firebase.default.auth().signOut().then(()=> {
      this.router.navigateByUrl('landing');
    })
  }

}
