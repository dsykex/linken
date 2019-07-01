import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
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
  @ViewChild('result', {static: false}) resultElement: ElementRef;
  public showQRCode : boolean = true;

  @ViewChild('elem', {static:false}) qr: ElementRef;

  constructor(public renderer: Renderer)
  {
    
  }

  ngOnInit()
  {
    
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

  render(e){
    console.log(e.result);   
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
