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
    this.clientinfocervice.addUser(registerForm.value);
    // this.clientService.registerClient(registerForm.value)
    this.resetForm(registerForm);
    this.router.navigateByUrl('/thanks');
  }
  ran = "1223as";
  resetForm(registerForm?: NgForm)
  {
    
    if(registerForm != null)
    registerForm.reset();
    
  }
  ngOnInit() {
    
    this.resetForm();
  }

}
