import { Injectable } from '@angular/core';
import * as firebase from './fb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor() { }

  public getUserCodes(email) : Promise<any>
  {
    let codeObserver = new Promise(resolve => {
      let db = firebase.default.firestore();
      let codes = db.collection('code_data');
  
      let codeArray = [];
      
      codes.where('owner', '==', email).onSnapshot(snapshot => {
        snapshot.docChanges().forEach(c => {
          if(c.type == 'added')
          {
            const codeData = c.doc;
            
            let cData = codeData.data();
            cData.id = codeData.id;
            codeArray.push(cData);
            resolve(codeArray);
          }
        });
      });
    })
    return codeObserver;
  }
}
