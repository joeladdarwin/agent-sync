import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Observable } from '@firebase/util';
import { Client } from '../../shared/client';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ ClientinfoService]
})

export class RegisterComponent implements OnInit {
  
 
  constructor(private router: Router, private clientinfocervice: ClientinfoService) {


  }
 
  onSubmit(registerForm : NgForm)
  { 
    var name = registerForm.controls['name'].value;
    var email = registerForm.controls['email'].value;
    var brokerage = registerForm.controls['brokerage'].value;
    var phone = registerForm.controls['phone'].value;
    var password = "1sdsF89";
    
    this.clientinfocervice.addUser(name, email, brokerage, phone, password);
    // this.clientService.registerClient(registerForm.value)
    this.resetForm(registerForm);
    this.router.navigateByUrl('/loginsent');
  }
 
  resetForm(registerForm?: NgForm)
  {
    
    if(registerForm != null)
    registerForm.reset();
    
  }
  ngOnInit() {
    
    this.resetForm();
  }

}
