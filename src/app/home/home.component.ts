import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from '../fb';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: any = {};
  public codes = [];
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getUserInfo().then(user => {
      if(!user.email)
        this.router.navigateByUrl('/landing');
      else
        this.user = user;
      
        this.getCodes();
    });
  }

  async getCodes()
  {
    let db = firebase.default.firestore();
    let codes = db.collection('code_data');

    await codes.where('owner', '==', this.user.email).onSnapshot(snapshot => {
      snapshot.docChanges().forEach(c => {
        if(c.type == 'added')
        {
          const codeData = c.doc.data();
          this.codes.push(codeData);
        }
      });
      console.log(this.codes);
    });
  }

  logout()
  {
    firebase.default.auth().signOut().then(()=> {
      this.router.navigateByUrl('landing');
    })
  }

}
