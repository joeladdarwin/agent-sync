import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss'],
  providers: [ClientinfoService]
})
export class ThanksComponent implements OnInit {
property;
phone;
constructor(private cli: ClientinfoService, private router: Router ) { }
Ordergennoaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet, phone)
{
  this.cli.placeOrdergennoaddoncode(building,street,city,zip,squarefeet,orders,ordersprice,visitingdate, visitingtime, comments,lockcode,meet, phone)
  this.router.navigateByUrl("/placeorder")
}
Ordergennoaddonmeet(building, street, city, zip, squarefeet, orders, total, visitingdate, visitingtime, comments, meet, phone) {
  this.cli.placeOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, total, visitingdate, visitingtime, comments, meet, phone)
  this.router.navigateByUrl("/placeorder")
}

  ngOnInit() {
  }

}
