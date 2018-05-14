import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
 
})
export class LoginComponent implements OnInit {
  state: string = '';
  error: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
   
   
  }
  onSubmit(loginForm) {
    if (loginForm.valid) {
      console.log(loginForm.value);
    }
    }
        
  ngOnInit() {}
}
