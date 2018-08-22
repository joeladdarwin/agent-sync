import { Component, OnInit } from '@angular/core';



import { ClientinfoService } from '../../shared/clientinfo.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
 
  styleUrls: ['./myorder.component.scss'],
  providers:[ClientinfoService]
})
export class MyorderComponent implements OnInit {
  view: string = 'month';

  date;
  constructor(private cli: ClientinfoService, ) { }
  datacom;
  datas;
  

  ngOnInit() {
    this.date = this.cli.datenow();
      this.datacom = this.cli.queryordernew(); 
  }

}
