import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgetinfo',
  templateUrl: './forgetinfo.component.html',
  styleUrls: ['./forgetinfo.component.scss'],
  providers : [ClientinfoService]
})
export class ForgetinfoComponent implements OnInit {
 error;
  constructor(private cli : ClientinfoService) { }
  onSubmit(passwordresetform : NgForm)
  {
    var email = passwordresetform.controls['recoveremail'].value;
    this.cli.passwordrecovery(email)
    this.error = this.cli.passwordrecovery(email)
  }
  ngOnInit() {
  }
  
}
