import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, fromDocRef  } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Client } from '../shared/client';
import { Home } from '../shared/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { EmailAuthProvider } from '@firebase/auth-types';
import { User } from 'firebase';
import * as firebase from 'firebase/app';



@Injectable()
export class ClientinfoService {
  authState: any = null;
  error;
  displayName: string;
  user : Observable<User>;
  usersCollection : AngularFirestoreCollection<Client>;
  users : Observable<Client[]>;
  homeCollection : AngularFirestoreCollection<Home>;
  userDocument : AngularFirestoreDocument<Client>;
  docRefid : string;
  private userDetails: firebase.User = null;
  constructor(public afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState;

    this.usersCollection = this.afs.collection('users');
    this.homeCollection = this.afs.collection('home');
    
    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        // console.log(this.userDetails);
      } else {
        this.userDetails = null;
      }
    }
      );
   }
  
  addHome(createdon)
  {
    var createdby = this.afAuth.auth.currentUser.displayName;
    
    this.homeCollection.add(
      {
        createdon, createdby
      }
    ).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      var docRefid = this.docRef.id;
      return docRefid
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
    updateHomeaddress(street, city, zip, unit)
    {
      this.homeCollection.doc(this.docRefid).update(
        {
          street, city, zip, unit
        }

      )
    }
  
  addUser(displayName, email, brokerage, phone, password)
   {
   
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (user) => {
        this.authState = user
        
        
        this.usersCollection.add(
          { 
           displayName, email, brokerage, phone }
         )
        this.afAuth.auth.sendPasswordResetEmail(email)
        this.afAuth.auth.currentUser.updateProfile(
          {
            displayName : displayName,
            photoURL : null
          }
   
        )
        this.afAuth.auth.currentUser.updatePhoneNumber(phone)
       
      }
    )
      .catch(err => {
        console.log('Something went wrong:', err.message);
      })
    // this.afAuth.auth.createUserWithEmailAndPassword(email,password)
     }
  
  getUsername()
  {
    return this.afAuth.auth.currentUser.displayName;
  }  
  getBrokerage()
  {
    
  } 
  getUser()
  {
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
  } 
  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.router.navigate(['/dashboard'])
        this.getUser();

      })
      .catch(error => console.log(error));
  }

 
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }
  }