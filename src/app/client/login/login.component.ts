import { Component, OnInit, HostBinding } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [ClientinfoService]
})
export class LoginComponent implements OnInit {
  state: string = '';
  error: any =null;

  constructor(private clientinfocervice : ClientinfoService) {
   
   
  }
  onSubmit(loginForm : NgForm) {
    var email = loginForm.controls['email'].value;
    var pass = loginForm.controls['password'].value;
    this.clientinfocervice.emailLogin(email, pass);
    this.error = this.clientinfocervice.emailLogin(email, pass);
    }
        
  ngOnInit() {}
}
