import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class ClientService {
  clientList: AngularFireList<any>;
  selectedClient : Client = new Client();
  constructor(private firebase: AngularFireDatabase ) { }
  getData()
  {
    this.clientList = this.firebase.list('client');
    return this.clientList;
  }
  registerClient(client : Client){
    this.clientList.push({
      fullname: client.fullname,
      brokerage : client.brokerage,
      email : client.email,
      phone : client.phone,
      password: Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8),
    });
  }
 editClient(client : Client) 
 {
   this.clientList.update(client.$key,
     {
       fullname: client.fullname,
       brokerage: client.brokerage,
       email: client.email,
       phone: client.phone,
     }
  );
 }
 deleteClient($key : string)
 {
    this.clientList.remove($key); 
 }
}
