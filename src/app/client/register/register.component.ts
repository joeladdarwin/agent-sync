import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from  '../../shared/client.service'
import { NgForm } from '@angular/forms';
import { generate } from 'generate-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ClientService]
})

export class RegisterComponent implements OnInit {
  
 
  constructor(private router: Router, private clientService : ClientService) {


  }
 
  onSubmit(registerForm : NgForm)
  {
    this.clientService.registerClient(registerForm.value)
    this.resetForm(registerForm);
    this.router.navigateByUrl('/thanks');
  }
  resetForm(registerForm?: NgForm)
  {
    
    if(registerForm != null)
    registerForm.reset();
    this.clientService.selectedClient = {
      $key : null,
      fullname : '',
      brokerage : '',
      email : '',
      phone : '',
      password: ''
    }
  }
  ngOnInit() {
    this.clientService.getData();
    this.resetForm();
  }

}
