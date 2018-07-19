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
obj;
 property;


//  other = false;

  constructor(private cli : ClientinfoService, private router : Router) {
   
   }
   please(lcode)
   {
     this.cli.updateMeet(lcode)
   }

  ngOnInit() {
    this.property = this.cli.getBuilding2();

  }

  accessSubmit(accessForm : NgForm)
  {
   
    var lcode = accessForm.controls['lcode'].value;
   
      console.log(lcode);
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
    console.log("meet agent on site");
  }
}
