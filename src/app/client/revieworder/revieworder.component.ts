import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Observable } from '@firebase/util';
import { Home } from '../../shared/home';

@Component({
  selector: 'app-revieworder',
  templateUrl: './revieworder.component.html',
  styleUrls: ['./revieworder.component.scss'],
  providers:[ClientinfoService]
})
export class RevieworderComponent implements OnInit {
  data;
  data1;
  constructor(public cli : ClientinfoService) {
    this.data = this.cli.getBuilding2();
   }

  ngOnInit() {
    
  }

}
