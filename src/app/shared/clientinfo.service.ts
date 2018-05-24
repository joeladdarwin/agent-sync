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
    this.user = afAuth.authState;
    this.usersCollection = this.afs.collection('users');
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
   }
  

  
  addUser(name, email, brokerage, phone, password)
   {
        
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(value => {
      console.log('Success!', value);
    })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      })
    // this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    this.afAuth.auth.sendPasswordResetEmail(email)
       
    this.usersCollection.add({name, email, brokerage, phone}).then((user) => {
      this.authState = user
      
     
    }).catch(function (error) {
         console.error("Error adding document: ", error);
       });
     
    
     
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