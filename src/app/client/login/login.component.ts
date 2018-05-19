import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Observable } from '@firebase/util';
import { Client } from '../../shared/client';
import { NgForm } from '@angular/forms';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [ClientinfoService]
})
export class LoginComponent implements OnInit {
  state: string = '';
  error: any;

  constructor(private clientinfocervice : ClientinfoService, private router: Router) {
   
   
  }
  onSubmit(loginForm : NgForm) {
    var email = loginForm.controls['email'].value;
    var pass = loginForm.controls['password'].value;
    this.clientinfocervice.emailLogin(email, pass);
    if (loginForm.valid) {
     
      
    }
    }
        
  ngOnInit() {}
}
