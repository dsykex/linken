import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as firebase from '../fb';

@Component({
  selector: 'app-create-code',
  templateUrl: './create-code.component.html',
  styleUrls: ['./create-code.component.scss']
})
export class CreateCodeComponent implements OnInit {

  public user: any = {};
  public code: any = {};
  public type: string;
  public hasTime: boolean;
  public canDL: boolean;
  public hasLocation: boolean;
  public encodedQR: any;
  public dlTxt: string;
  public readQR: any;

  @ViewChild('qr', {static:false}) qr: ElementRef;

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserInfo().then(user => {
      if(!user.email)
        this.router.navigateByUrl('/landing');
      else
        this.user = user;
    })

  }

  toggleDL()
  {
    this.canDL = !this.canDL;
    if(this.canDL)
      this.dlTxt = "Download Enabled"
    else
      this.dlTxt = "Download Disabled";
  }

  setType(type)
  {
    this.reset();
    switch(type)
    {
      case 'msg':
        {
          this.type = 'msg';
        }break;
      case 'file':
        {
          this.type= 'file';
        }break;
      case 'link':
        {
          this.type= 'link';
        }break;
    }
  }

  public reset()
  {
    this.code.content = ''
    this.code.recv = '';
    this.hasTime = false;
    this.canDL = false;
    this.hasLocation = false;
  }

  showValue()
  {
    console.log(this.code.time);
  }

  multiplier(timescale:string) : number
  {
    let timeMult = 0;
    switch(timescale)
    {
      case 'seconds':
        timeMult=1000;
        break;
      case 'minutes':
        timeMult=60000;
        break;
      case 'hours':
        timeMult=3600000;
        break;
      case 'days':
        timeMult = 86400000;
        break;
    }

    return timeMult;
  }

  async generateQRData(dataObj)
  {
    this.encodedQR = dataObj['content_id'];

    let imgData = ''
    let imgInt = await setInterval(()=> {
      let q = this.qr.nativeElement.children[0].children[0].children[0].src;
      if(q)
      {
        imgData=q;
        clearInterval(imgInt);

        let db = firebase.default.firestore();
        let code_data = db.collection('code_data');

        let cid = dataObj['content_id'];
        delete dataObj['content_id'];

        dataObj.data = imgData;

        code_data.add(dataObj).then(docRef => {
          this.readQR=imgData;

          db.collection('code_content').doc(cid).update({data_id: docRef.id}).then(() => { 
            
          });

          this.router.navigateByUrl('home');
        });
      }
    }, 100);

  }

  render(e){
    console.log(e.result);   
  }

  createCode()
  {
    let _codeData: any = {};

    if(this.user.email)
    {
      if(this.code.content)
      {
        _codeData['owner'] = this.user.email;
        _codeData['type'] = this.type;
        let db = firebase.default.firestore();
        let code_content = db.collection('code_content');

        let _newContent = {content: this.code.content};

        //Process our qrobject filters for encoding after content is saved
        code_content.add(_newContent).then(added_content => {
          _codeData['content_id'] = added_content.id;
          _codeData['recv'] = this.code.recv.split(',');

          if(this.hasTime)
          {
            let seconds = this.code.time * this.multiplier(this.code.timescale);
            _codeData['time'] = Date.now() + seconds;
          }

          if(this.canDL)
            _codeData['dl'] = true;

          this.generateQRData(_codeData);
        });
      }
    }
  }

}
