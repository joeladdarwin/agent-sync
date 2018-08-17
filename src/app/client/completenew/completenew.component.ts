import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-completenew',
  templateUrl: './completenew.component.html',
  styleUrls: ['./completenew.component.scss'],
  providers: [ClientinfoService]
})
export class CompletenewComponent implements OnInit {
  title="New Order > First Unit";
  property;
  phone;
  constructor(private cli: ClientinfoService, private router: Router ) { }
 
  placeOrdergennoaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet, phone)
  {
    this.cli.placeOrdergennoaddoncode(building,street,city,zip,squarefeet,orders,ordersprice,visitingdate, visitingtime, comments,lockcode,meet, phone)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, total, visitingdate, visitingtime, comments, meet, phone) {
    this.cli.placeOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, total, visitingdate, visitingtime, comments, meet, phone)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrdergenaddonmeet(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet, phone) {
    this.cli.placeOrdergenaddonmeet(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet, phone)
    this.router.navigateByUrl("/placeorder")
  }


  placeOrdergenaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet, phone){
    this.cli.placeOrdergenaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet, phone)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrderaptnoaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet, phone){
    this.cli.placeOrderaptnoaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet, phone)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrderaptnoaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, meet, phone) {
    this.cli.placeOrderaptnoaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, meet, phone)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrderaptaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet, phone){
    this.cli.placeOrderaptaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet, phone)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrderaptaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet, phone) {
    this.cli.placeOrderaptaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet, phone)
    this.router.navigateByUrl("/placeorder")
  }
  submitOrdergennoaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet, phone) {
    this.cli.placeOrdergennoaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet, phone)
    this.router.navigateByUrl("/dashboard")
  }

  submitOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, total, visitingdate, visitingtime, comments, meet, phone) {
    this.cli.placeOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, total, visitingdate, visitingtime, comments, meet, phone)
    this.router.navigateByUrl("/dashboard")
  }

  submitOrdergenaddonmeet(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet, phone) {
    this.cli.placeOrdergenaddonmeet(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet, phone)
    this.router.navigateByUrl("/dashboard")
  }


  submitOrdergenaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet, phone) {
    this.cli.placeOrdergenaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet, phone)
    this.router.navigateByUrl("/dashboard")
  }

  submitOrderaptnoaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet, phone) {
    this.cli.placeOrderaptnoaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet, phone)
    this.router.navigateByUrl("/dashboard")
  }

  submitOrderaptnoaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, meet, phone) {
    this.cli.placeOrderaptnoaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, meet, phone)
    this.router.navigateByUrl("/dashboard")
  }

  submitOrderaptaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet, phone) {
    this.cli.placeOrderaptaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet, phone)
    this.router.navigateByUrl("/dashboard")
  }
  submitOrderaptaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet, phone) {
    this.cli.placeOrderaptaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet, phone)
    this.router.navigateByUrl("/dashboard")
  }

  addanotherunit(OrderForm:NgForm)
  {
    var building = OrderForm.controls['building'].value;
    var street = OrderForm.controls['street'].value;
    var city = OrderForm.controls['city'].value;
    var zip = OrderForm.controls['zip'].value;
    
    var squarefeet = OrderForm.controls['squarefeet'].value;
  
    this.router.navigateByUrl("/placeorder")

  }
  ngOnInit() {
    this.property = this.cli.getBuilding2();
    this.phone = this.cli.getPhone();
  }
}
