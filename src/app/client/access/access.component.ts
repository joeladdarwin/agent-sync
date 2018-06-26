import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Observable } from '@firebase/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'], 
  providers: [ClientinfoService]
})
export class AccessComponent implements OnInit {
  title = "New Order > First Unit";
 show =false;
 property;

//  other = false;

  constructor(private cli : ClientinfoService, private router : Router) {

   }

  ngOnInit() {
    this.property = this.cli.getBuilding2();

  }

  accessSubmit(accessForm : NgForm)
  {
   
    var lcode = accessForm.controls['lcode'].value;
   
     
      this.cli.updateMeet(lcode)
  }
  lockbox()
  { 
   
    this.cli.updateMeet2("lock code")
  }
  accesscode()
  {
    this.cli.updateMeet2("access code")
  }
  others()
  {
    this.cli.updateMeet3("Others")
  }
  meetagent()
  {
    this.cli.updateMeet3("meet agent on site")
  }
}
