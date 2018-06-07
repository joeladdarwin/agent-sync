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

  constructor(private cli : ClientinfoService) {
    this.names = this.cli.getUsername();
   }

  onselectbuilding()
  {
    
    this.cli.addBuilding("Home")
  }
  onselecttown()
  {
    this.cli.addBuilding("Town Home")
    
  }
  onselectapt()
  {
    this.cli.addBuilding("Appartment")
    
  }
  onselectcommercial()
  {
    this.cli.addBuilding("Commercial")
   
  }
  ngOnInit() {
  }

}
