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
import { Commercial } from './commercial';





@Injectable()
export class ClientinfoService {
  authState: any = null;
  error;
  displayName: string;
  user : Observable<User>;
  usersCollection : AngularFirestoreCollection<Client>;
  users : Observable<Client[]>;
  buildingCollection : AngularFirestoreCollection<Home>;
  priceCollection: AngularFirestoreCollection<Commercial>;
  userDocument : AngularFirestoreDocument<Client>;
  docRef; 
  unit : number;
  totalunits : number;
  createdby:string;
  buildingRef;
  private userDetails: firebase.User = null;
  constructor(public afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState;
    
    this.usersCollection = this.afs.collection('users');
    this.buildingCollection = this.afs.collection('building');
    this.priceCollection = this.afs.collection('price');
   
    // this.unit =1 ;
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
  unittracking()
  {
    this.unit = 1;
    return this.unit
  }
  addBuilding(building)
  {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, ""); 
    this.buildingCollection.doc(createdby+this.unittracking()).set({
      createdby, building,
    }
    
    )
      
  }
  updatetotalbuilding(totalunits)
  {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      {
        createdby, totalunits
      
      })
      this.router.navigate(['/address'])
  }
  
    updatePropertyaddress(street, city, zip )
    {
       var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
        {
          street, city, zip,
        }
        
      )
      this.router.navigate(['/squarefeet'])
     
    }
  updatePropertyaddressapt(street, city, zip, unit) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      {
        street, city, zip, unit
      }
    
    )
    this.router.navigate(['/squarefeet'])

  }


    updateHomesqft(squarefeet)
    {
      var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
      this.buildingCollection.doc(createdby + this.unittracking()).update(
        {squarefeet})
      this.router.navigate(['/product'])
    }

    updateVisitingdate(visitingdate)
    {
      var createdby = this.afAuth.auth.currentUser.displayName;
      this.buildingCollection.doc(createdby + this.unit).update(
      {
        visitingdate, createdby
      })
      this.router.navigate(['/time'])
    }
    updatevisitingtime(visitingtime)
    {
      var createdby = this.afAuth.auth.currentUser.displayName;
      this.buildingCollection.doc(createdby + this.unit).update(
        {
          visitingtime, createdby
        })
      this.router.navigate(['/comment'])
    }
    updateComments(comments)
    {
      var createdby = this.afAuth.auth.currentUser.displayName;
      this.buildingCollection.doc(createdby + this.unittracking()).update(
        {
          createdby, comments
        }
      )
      this.router.navigate(['/revieworder'])
    }
  updateProducts(productsneeded, ordersprice)
    {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { productsneeded, ordersprice })
    this.router.navigate(['/revieworder'])

    }

    
  getBuilding2() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, ""); 
    this.docRef = this.buildingCollection.doc("" + createdby + this.unittracking() + "").valueChanges();
    return this.docRef
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
          // console.log("Sign-in provider: " + profile.providerId);
          // console.log("  Provider-specific UID: " + profile.uid);
          // console.log("  Name: " + profile.displayName);
          // console.log("  Email: " + profile.email);
          // console.log("  Photo URL: " + profile.photoURL);
         
        });
      } else {
        // User is signed out.
        // ...
      }
    });
  } 
  passwordrecovery(email: string)
  {
    return this.afAuth.auth.sendPasswordResetEmail(email).then((user) =>
    {  
      this.router.navigate(["/loginsent"])
    }
    ).catch(error => {
      return error
    }
    );
  }
  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.router.navigate(['/dashboard'])
        this.getUser();

      })
      .catch(error => 
         {
           return error
         }

      
    );
  }

 
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }
  }