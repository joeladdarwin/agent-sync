import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss'],
  providers : [ClientinfoService]
})
export class PlaceorderComponent implements OnInit {
  names : any;
  cdate = Date.now();

  constructor(private cli : ClientinfoService, private router: Router) {
    this.names = this.cli.getUsername();
   }

  onselecthouse()
  {
    
    this.cli.addBuilding("House");
    this.router.navigateByUrl("/unitnumber")
  }
  onselecttown()
  {
    this.cli.addBuilding("Town Home")
    this.router.navigateByUrl("/unitnumber")
    
  }
  onselectapt()
  {
    this.cli.addBuilding("Appartment")
    this.router.navigateByUrl("/unitnumber")
    
  }
  onselectcommercial()
  {
    this.cli.addBuilding("Commercial")
    this.router.navigateByUrl("/unitnumber")
   
  }
  ngOnInit() {
  }

}
