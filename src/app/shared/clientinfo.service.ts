import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, fromDocRef  } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Client } from '../shared/client';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { EmailAuthProvider } from '@firebase/auth-types';

@Injectable()
export class ClientinfoService {
  authState: any = null;
  error;
  usersCollection : AngularFirestoreCollection<Client>;
  users : Observable<Client[]>;
  userDocument : AngularFirestoreDocument<Client>;
  constructor(public afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    
    this.usersCollection = this.afs.collection('users');
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
   }
 
  addUser(name, email, brokerage, phone, password)
   {
     
    this.afAuth.auth.sendPasswordResetEmail(email);
    this.usersCollection.add({name, email, brokerage, phone, password}).then(function (docRef) {
       console.log("Document written with ID: ", docRef.id);
      
     })
       .catch(function (error) {
         console.error("Error adding document: ", error);
       });
     
    
     
   }
   
  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.router.navigate(['/dashboard'])
        
      })
      .catch(error => console.log(error));
  }

   addUser2(email:string,password :string)
   {
    
    
     this.afAuth.auth.createUserWithEmailAndPassword(email, password).
      then((user) => {
         this.authState = user
         
        
       }).catch(function (error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // ...
     });
   }
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }
  }