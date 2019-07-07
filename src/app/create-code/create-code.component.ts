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
  public qrImgData: any;

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

  async generateQRData(dataArr)
  {
    this.encodedQR = dataArr;

    let imgInt = await setInterval(()=> {
      let q = this.qr.nativeElement.children[0].children[0].children[0].src;
      if(q)
      {
        let imgData = q;
        
        console.log(imgData);
        clearInterval(imgInt);
      }
    }, 100);
  }

  render(e){
    console.log(e.result);   
  }

  createCode()
  {
    let _codeData = [];
    if(this.user.email)
    {
      if(this.code.content)
      {
        _codeData[0] = this.user.email;

        let db = firebase.default.firestore();
        let code_content = db.collection('code_content');

        let _content_id = code_content.doc().id;
        let _newContent = {id: _content_id, content: this.code.content};

        //Process our qrobject filters for encoding after content is saved
        code_content.doc(_content_id).set(_newContent).then(() => {
          console.log('code added');
          _codeData[1] = _content_id;
          _codeData[2] = this.code.recv.split(',');

          if(this.hasTime)
          {
            let seconds = this.code.time * this.multiplier(this.code.timescale);
            _codeData[4] = Date.now() + seconds;
          }

          if(this.canDL)
            _codeData[5] = true;
          else
            _codeData[5]= false;

          this.generateQRData(_codeData);

        });
      }
    }
    
  }

}
