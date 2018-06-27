import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Observable } from '@firebase/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-squarefeet',
  templateUrl: './squarefeet.component.html',
  styleUrls: ['./squarefeet.component.scss'],
  providers:[ClientinfoService]

})
export class SquarefeetComponent implements OnInit {
  title = "New Order > First Unit";
  property;
  obj;
  constructor(private cli: ClientinfoService, private router : Router) { }
  sfhma(sqft)
  {
    this.cli.updateHomesqft(sqft )
    
  }
please()
{
  this.obj = "Please select a squarefeet"
}

  ngOnInit() {
    this.property = this.cli.getBuilding2()
  }

}
