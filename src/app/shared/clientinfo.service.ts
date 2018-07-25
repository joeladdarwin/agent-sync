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
  ordersCollection: AngularFirestoreCollection<Home>;
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
    this.ordersCollection = this.afs.collection('orders');
    this.usersCollection = this.afs.collection('users');
    this.buildingCollection = this.afs.collection('building');
    this.ordersCollection = this.afs.collection('orders');
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
      this.deleteProducts() 
      this.deleteProduct1();
      this.deleteProduct2();
      this.deleteProduct3();
      this.deleteProduct4();
      this.deleteProduct5();
      this.deleteProduct6();
      this.deleteProduct7();
      this.deleteProduct8();
      this.deleteProduct9();
      this.deleteProduct10();
      this.deleteProduct11();
      this.deleteProduct12();
      this.deleteProduct13();
      this.deleteAddons();
      this.deleteAddon1();
      this.deleteAddon2();
      this.deleteAddon3();
    }

    updateVisitingdate(visitingdate: Date)
    {
      var timestamp;
      var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
      this.buildingCollection.doc(createdby + this.unittracking()).update(
        { visitingdate, timestamp: firebase.firestore.FieldValue.serverTimestamp() })
      this.router.navigate(['/time'])
    }
    // getVisitingdate() {
      
    //   var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    //   this.docRef = this.buildingCollection.doc("" + createdby + this.unittracking() + "").valueChanges();
    //   return this.docRef.FieldValue.visitingdate
    //   }
 
    updatevisitingtime(visitingtime)
    {
      var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
      this.buildingCollection.doc(createdby + this.unittracking()).update(
        {
          visitingtime
        })
      this.router.navigate(['/comment'])
    }
    updateComments(comments)
    {
      var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
      this.buildingCollection.doc(createdby + this.unittracking()).update(
        {
          comments
        }
      )
      this.router.navigate(['/revieworder'])
    }
 
  QueryOrder() {
    
    this.ordersCollection.ref.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.data() //is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // console.log(doc.data());
        // console.log(doc.id, " => ", doc.data());
        return doc.data();
      });

    });
  }
 Queryorder2() 
 {

   return this.ordersCollection.valueChanges();
 }

 queryorder(orderid)
 {
   this.docRef = this.ordersCollection.doc(orderid).valueChanges();

   return this.docRef
 }
deleteorder(orderid) {
    this.docRef = this.ordersCollection.doc(orderid).delete();

    return this.docRef
  }
  placeOrderaptaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet){
    var createdby = this.afAuth.auth.currentUser.displayName;
    var timestamp = firebase.firestore.FieldValue.serverTimestamp()
    var d = new Date();
    var c = (d.getDate()).toString() + (d.getMonth() + 1).toString() + (d.getFullYear()).toString().substr(-2) + (d.getHours()).toString() + (d.getMinutes()).toString();
    
    var orderid = building.replace(/\s+/, "").toLowerCase() + c;
    this.ordersCollection.doc(orderid).set(
      {
        
        orderedby:createdby,
        building: building,
        street: street,
        city: city,
        zip: zip,
        unit: unit,
        squarefeet: squarefeet,
        ordersprice: ordersprice,
        orders: orders,
        meet:meet,
        addons: addons,
        addonsprice : addonsprice,
        visitingdate: visitingdate,
        visitingtime: visitingtime,
        comments: comments,
        orderedon: timestamp,
          orderid: orderid
      }
    )
  }
  placeOrderaptaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet){
    var createdby = this.afAuth.auth.currentUser.displayName;
    var timestamp = firebase.firestore.FieldValue.serverTimestamp()
    var d = new Date();
    var c = (d.getDate()).toString() + (d.getMonth() + 1).toString() + (d.getFullYear()).toString().substr(-2) + (d.getHours()).toString() + (d.getMinutes()).toString();
    var orderid = building.replace(/\s+/, "").toLowerCase() + c;
    this.ordersCollection.doc(building.replace(/\s+/, "").toLowerCase() + c).set(
      {
        createdby:createdby,
        building: building,
        street: street,
        city: city,
        zip: zip,
        unit: unit,
        squarefeet: squarefeet,
        ordersprice : ordersprice,
        orders: orders,
        addons: addons,
        addonsprice:addonsprice,
        lockcode: lockcode,
        meet: meet,
        visitingdate: visitingdate,
        visitingtime: visitingtime,
        comments: comments,
        orderedon: timestamp,
        orderid: orderid
      }
    )

  }
  placeOrderaptnoaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, meet){
    var createdby = this.afAuth.auth.currentUser.displayName;
    var timestamp = firebase.firestore.FieldValue.serverTimestamp()
    var d = new Date();
    var c = (d.getDate()).toString() + (d.getMonth() + 1).toString() + (d.getFullYear()).toString().substr(-2) + (d.getHours()).toString() + (d.getMinutes()).toString();
    var orderid = building.replace(/\s+/, "").toLowerCase() + c;
    this.ordersCollection.doc(orderid).set(
      {
        orderedby: createdby,
        building: building,
        street: street,
        city: city,
        zip: zip,
        unit: unit,
        squarefeet: squarefeet,
        meet:meet,
        total: ordersprice,
        orders: orders,
        visitingdate: visitingdate,
        visitingtime: visitingtime,
        comments: comments,
        orderedon: timestamp,
        orderid: orderid,
      }
    )

  } 
  placeOrderaptnoaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet) {
    var createdby = this.afAuth.auth.currentUser.displayName;
    var timestamp = firebase.firestore.FieldValue.serverTimestamp()
    var d = new Date();
    var c = (d.getDate()).toString() + (d.getMonth() + 1).toString() + (d.getFullYear()).toString().substr(-2) + (d.getHours()).toString() + (d.getMinutes()).toString();
    var orderid = building.replace(/\s+/, "").toLowerCase() + c;
    this.ordersCollection.doc(orderid).set(
      {
        orderedby: createdby,
        building: building,
        street: street,
        city: city,
        zip: zip,
        unit: unit,
        squarefeet: squarefeet,
        total: ordersprice,
        orders: orders,
        lockcode: lockcode,
        meet: meet,
        visitingdate: visitingdate,
        visitingtime: visitingtime,
        comments: comments,
        orderedon: timestamp,
        orderid: orderid
      }
    )
  }
 
  placeOrdergenaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet){
    var createdby = this.afAuth.auth.currentUser.displayName;
    var timestamp = firebase.firestore.FieldValue.serverTimestamp()
    var d = new Date();
    var c = (d.getDate()).toString() + (d.getMonth() + 1).toString() + (d.getFullYear()).toString().substr(-2) + (d.getHours()).toString() + (d.getMinutes()).toString();
    var orderid = building.replace(/\s+/, "").toLowerCase() + c;
    this.ordersCollection.doc(orderid).set(
      {
        orderedby: createdby,
        building: building,
        street: street,
        city: city,
        zip: zip,
        squarefeet: squarefeet,
        ordersprice:ordersprice,
        orders: orders,
        lockcode: lockcode,
        meet: meet,
        visitingdate: visitingdate,
        visitingtime: visitingtime,
        comments: comments,
        addons:addons,
        addonsprice : addonsprice,
        orderedon: timestamp,
        orderid: orderid
      }
    )
  }


  placeOrdergenaddonmeet(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet){
    var createdby = this.afAuth.auth.currentUser.displayName;
    var timestamp = firebase.firestore.FieldValue.serverTimestamp()
    var d = new Date();
    var c = (d.getDate()).toString() + (d.getMonth() + 1).toString() + (d.getFullYear()).toString().substr(-2) + (d.getHours()).toString() + (d.getMinutes()).toString();
    var orderid = building.replace(/\s+/, "").toLowerCase() + c;
    this.ordersCollection.doc(orderid).set(
      {
        orderedby: createdby,
        building: building,
        street: street,
        city: city,
        zip: zip,
        squarefeet: squarefeet,
        ordersprice: ordersprice,
        orders: orders,
        meet: meet,
        visitingdate: visitingdate,
        visitingtime: visitingtime,
        comments: comments,
        addons:addons,
        addonsprice:addonsprice,
        orderedon: timestamp,
        orderid: orderid
      }
    )
  }

  placeOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, meet){
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    var timestamp = firebase.firestore.FieldValue.serverTimestamp()
    var d = new Date();
    var c = (d.getDate()).toString() + (d.getMonth() + 1).toString() + (d.getFullYear()).toString().substr(-2) + (d.getHours()).toString() + (d.getMinutes()).toString();
    var orderid = building.replace(/\s+/, "").toLowerCase() + c;
    this.ordersCollection.doc(orderid).set(
      {
        orderedby: createdby,
        building: building,
        street: street,
        city: city,
        zip: zip,
        squarefeet: squarefeet,
        total: ordersprice,
        orders: orders,
        meet: meet,
        visitingdate: visitingdate,
        visitingtime: visitingtime,
        comments: comments,
        orderedon: timestamp,
        orderid: orderid
      }
    )
  }
  placeOrdergennoaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet)
  {
    var createdby = this.afAuth.auth.currentUser.displayName;
    var timestamp = firebase.firestore.FieldValue.serverTimestamp()
    var d = new Date();
    var c = (d.getDate()).toString() + (d.getMonth() + 1).toString() + (d.getFullYear()).toString().substr(-2) + (d.getHours()).toString() + (d.getMinutes()).toString();
    var orderid = building.replace(/\s+/, "").toLowerCase() + c;
    this.ordersCollection.doc(orderid).set(
      {
        orderedby: createdby,
        building: building,
        street: street,
        city: city,
        zip: zip,
        squarefeet: squarefeet,
        total: ordersprice,
        orders: orders,
        lockcode:lockcode,
        meet:meet,
        visitingdate: visitingdate,
        visitingtime: visitingtime,
        comments: comments,
        orderedon: timestamp,
        orderid: orderid
      }
    )
  }



  AddtoCart(orderstatus) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      {
        orderstatus
      }

    )
    this.router.navigate(['/completenew'])

  }
  updateProducts(productsneeded, ordersprice)
    {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { productsneeded, ordersprice  })

    }
  updateOrders(orders, ordersprice) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { orders, ordersprice })

  }
  
  deleteProducts() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { productsneeded: firebase.firestore.FieldValue.delete(), ordersprice: firebase.firestore.FieldValue.delete() })
  }  
  updateProduct1(product1, product1price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product1, product1price })
  } 
  deleteProduct1() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product1: firebase.firestore.FieldValue.delete(), product1price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct2(product2, product2price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product2, product2price })
  }  
  deleteProduct2() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product2: firebase.firestore.FieldValue.delete(), product2price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct3(product3, product3price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product3, product3price })
  }
  deleteProduct3() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product3: firebase.firestore.FieldValue.delete(), product3price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct4(product4, product4price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product4, product4price })
  }
  deleteProduct4() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product4: firebase.firestore.FieldValue.delete(), product4price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct5(product5, product5price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product5, product5price })
  }
  deleteProduct5() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product5: firebase.firestore.FieldValue.delete(), product5price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct6(product6, product6price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product6, product6price })
  }
  deleteProduct6() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product6: firebase.firestore.FieldValue.delete(), product6price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct7(product7, product7price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product7, product7price })
  }
  deleteProduct7() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product7: firebase.firestore.FieldValue.delete(), product7price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct8(product8, product8price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product8, product8price })
  }
  deleteProduct8() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product8: firebase.firestore.FieldValue.delete(), product8price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct9(product9, product9price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product9, product9price })
  }
  deleteProduct9() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product9: firebase.firestore.FieldValue.delete(), product9price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct10(product10, product10price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product10, product10price })
  }
  deleteProduct10() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product10: firebase.firestore.FieldValue.delete(), product10price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct11(product11, product11price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product11, product11price })
  }
  deleteProduct11() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product11: firebase.firestore.FieldValue.delete(), product11price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct12(product12, product12price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product12, product12price })
  }
  deleteProduct12() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product12: firebase.firestore.FieldValue.delete(), product12price: firebase.firestore.FieldValue.delete() })
  }
  updateProduct13(product13, product13price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product13, product13price })
  }
  deleteProduct13() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { product13: firebase.firestore.FieldValue.delete(), product13price: firebase.firestore.FieldValue.delete() })
  }
  updateAddon1(addon1, addon1price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update({
      addon1, addon1price
    })
  }
  deleteAddon1() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { addon1: firebase.firestore.FieldValue.delete(), addon1price: firebase.firestore.FieldValue.delete() })
  }
  updateAddon2(addon2, addon2price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { addon2, addon2price })
  }
  deleteAddon2() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { addon2: firebase.firestore.FieldValue.delete(), addon2price: firebase.firestore.FieldValue.delete() })
  }
  updateAddon3(addon3, addon3price) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { addon3, addon3price })
  }
  deleteAddon3() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { addon3: firebase.firestore.FieldValue.delete(), addon3price: firebase.firestore.FieldValue.delete() })
  }
  updateAddon(addons, addonsprice) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { addons, addonsprice})

    
  }

  updateAddons(addon) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { addon })

    this.router.navigate(['/access'])
  }
  deleteAddons() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { addons: firebase.firestore.FieldValue.delete(), addonsprice: firebase.firestore.FieldValue.delete() })
  }
  updateMeet(lockcode)
  {
      var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { lockcode : lockcode })
    this.router.navigate(['/date']) 
  }
  updateMeet2(meet) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { meet })
   
  }
  updateMeet3(meet) {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, "");
    this.buildingCollection.doc(createdby + this.unittracking()).update(
      { meet })
    this.router.navigate(['/date'])
  }
  getBuilding2() {
    var createdby = this.afAuth.auth.currentUser.displayName.replace(/\s+/, ""); 
    this.docRef = this.buildingCollection.doc("" + createdby + this.unittracking() + "").valueChanges();

    return this.docRef
  }
  getProfile() {
    var createdby = this.afAuth.auth.currentUser.displayName;
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
            photoURL : null,
           
            // brokerage : brokerage,
        
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
  getEmail()
  {
    return this.afAuth.auth.currentUser.email;
  } 
  getPhone() {
    return this.afAuth.auth.currentUser.phoneNumber;
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
        var phone = user.phoneNumber;
        var uid = user.uid;
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