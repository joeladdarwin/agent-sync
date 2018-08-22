import { Component, OnInit } from '@angular/core';

import { ClientinfoService } from '../../shared/clientinfo.service';
@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss'],
  providers:[ClientinfoService]
})
export class DeliveriesComponent implements OnInit {
  title="My Deliveries";
  datanew;
  constructor(private cli: ClientinfoService) { }

  ngOnInit() {
    this.datanew = this.cli.queryordernew();
  }

}
