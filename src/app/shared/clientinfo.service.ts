import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, fromDocRef  } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Client } from '../shared/client';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { EmailAuthProvider } from '@firebase/auth-types';
import { User } from 'firebase';

@Injectable()
export class ClientinfoService {
  authState: any = null;
  error;
  user : Observable<User>;
  usersCollection : AngularFirestoreCollection<Client>;
  users : Observable<Client[]>;
  userDocument : AngularFirestoreDocument<Client>;
  constructor(public afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    
    this.usersCollection = this.afs.collection('users');
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
   }
  
  addUser2(name:string, email:string, brokerage:string, phone:string, password:string)
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

  
  addUser(name, email, brokerage, phone, password)
   {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (user) => {
        this.authState = user
        this.usersCollection.add({ name, email, brokerage, phone })
        this.afAuth.auth.sendPasswordResetEmail(email)
      }
    )
      .catch(err => {
        console.log('Something went wrong:', err.message);
      })
    // this.afAuth.auth.createUserWithEmailAndPassword(email,password)
     }
   
  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.router.navigate(['/dashboard'])
        this.afAuth.auth.onAuthStateChanged(function (user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // .if (user != null) {
            user.providerData.forEach(function (profile) {
              console.log("Sign-in provider: " + profile.providerId);
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Name: " + profile.displayName);
              console.log("  Email: " + profile.email);
              console.log("  Photo URL: " + profile.photoURL);
            });
          } else {
            // User is signed out.
            // ...
          }
        });

      })
      .catch(error => console.log(error));
  }

 
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }
  }