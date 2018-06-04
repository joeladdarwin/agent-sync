import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';


@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss'],
  providers : [ClientinfoService]
})
export class PlaceorderComponent implements OnInit {
  names : any;
  cdate = Date.now();
  building;
  constructor(private cli : ClientinfoService) {
    this.names = this.cli.getUsername();
   }

  onselecthouse()
  {
    
    this.cli.addHome(this.cdate)
    this.cli.updateselectedbuilding("Home")
    
    
  }
  onselecttown()
  {

  }
  onselectapt()
  {

  }
  onselectcommercial()
  {

  }
  ngOnInit() {
  }

}
