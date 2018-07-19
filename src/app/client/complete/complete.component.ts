import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
  providers:[ClientinfoService]
})
export class CompleteComponent implements OnInit {
  title="New order > First Unit";
  property;

  constructor(private cli:ClientinfoService) { }
placeneworder(val){
  console.log(val+1);
return val+1;

}
  ngOnInit() {
    this.property=this.cli.getBuilding2()
  }

}
