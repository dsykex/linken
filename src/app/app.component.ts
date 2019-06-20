import { Component, ViewChild, ElementRef } from '@angular/core';
import * as firebase from './fb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'linken';
  public createdCode: any;
  public qrdata: any;
  public qrImageData;
  public codes: any = [];

  @ViewChild('elem', {static:false}) qr: ElementRef;

  constructor()
  {
    
  }

  ngOnInit()
  {
    let db = firebase.default.firestore();
    let codes = db.collection('codes');

    codes.onSnapshot(snap => {
      snap.docChanges().forEach(change => {
        if(change.type == 'added')
        {
          this.codes.push(change.doc.data());
        }
      });
    });

    console.log(this.codes);
  }

  async generateQRData()
  {
    this.createdCode = this.qrdata;
    let imgInt = await setInterval(()=> {
      let q = this.qr.nativeElement.children[0].children[0].children[0].src;
      if(q)
      {
        this.qrImageData = q;
        console.log(this.qrImageData);
        clearInterval(imgInt);


      }
    }, 100);
  }

  submitCode()
  {
    var db = firebase.default.firestore();
    let codes = db.collection('codes');

    let newCode = {
      data: this.qrImageData
    };

    codes.add(newCode).then(data => {
      console.log(data);
      this.qr.nativeElement.children[0].children[0].children[0].src = '';
      firebase.default.storage().ref('/newCode/code.jpg').putString(this.qrImageData).then(code => {
        let ref = code.ref;
        ref.getDownloadURL().then(url => {
          console.log(url);
        });
      });
    });
  }
}
