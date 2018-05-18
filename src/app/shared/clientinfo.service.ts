import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, fromDocRef  } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Client } from '../shared/client';

@Injectable()
export class ClientinfoService {
  usersCollection : AngularFirestoreCollection<Client>;
  users : Observable<Client[]>;
  userDocument : AngularFirestoreDocument<Client>;
  constructor(public afs : AngularFirestore) {
    
    this.usersCollection = this.afs.collection('users');
   }
   addUser(user:Client)
   {
     
     this.usersCollection.add(user).then(function (docRef) {
       console.log("Document written with ID: ", docRef.id);
       docRef.update({
         "password": docRef.id
       })
     })
       .catch(function (error) {
         console.error("Error adding document: ", error);
       });
     
    
     
   }

}
