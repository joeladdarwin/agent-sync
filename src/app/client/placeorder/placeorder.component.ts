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
  constructor(private cli : ClientinfoService) {
    this.names = this.cli.getUsername();
   }
  onselecthouse()
  {
    var cdate = Date.now();
    this.cli.addHome(cdate)
    
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
