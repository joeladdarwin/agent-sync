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
  constructor(private cli: ClientinfoService, private router: Router ) { }
 
  placeOrdergennoaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet)
  {
    this.cli.placeOrdergennoaddoncode(building,street,city,zip,squarefeet,orders,ordersprice,visitingdate, visitingtime, comments,lockcode,meet)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, total, visitingdate, visitingtime, comments, meet) {
    this.cli.placeOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, total, visitingdate, visitingtime, comments, meet)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrdergenaddonmeet(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet) {
    this.cli.placeOrdergenaddonmeet(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet)
    this.router.navigateByUrl("/placeorder")
  }


  placeOrdergenaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet){
    this.cli.placeOrdergenaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrderaptnoaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet){
    this.cli.placeOrderaptnoaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrderaptnoaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, meet) {
    this.cli.placeOrderaptnoaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, meet)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrderaptaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet){
    this.cli.placeOrderaptaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet)
    this.router.navigateByUrl("/placeorder")
  }

  placeOrderaptaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet) {
    this.cli.placeOrderaptaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet)
    this.router.navigateByUrl("/placeorder")
  }
  submitOrdergennoaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet) {
    this.cli.placeOrdergennoaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet)
    this.router.navigateByUrl("/dashboard")
  }

  submitOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, total, visitingdate, visitingtime, comments, meet) {
    this.cli.placeOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, total, visitingdate, visitingtime, comments, meet)
    this.router.navigateByUrl("/dashboard")
  }

  submitOrdergenaddonmeet(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet) {
    this.cli.placeOrdergenaddonmeet(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet)
    this.router.navigateByUrl("/dashboard")
  }


  submitOrdergenaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet) {
    this.cli.placeOrdergenaddoncode(building, street, city, zip, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet)
    this.router.navigateByUrl("/dashboard")
  }

  submitOrderaptnoaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet) {
    this.cli.placeOrderaptnoaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, lockcode, meet)
    this.router.navigateByUrl("/dashboard")
  }

  submitOrderaptnoaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, meet) {
    this.cli.placeOrderaptnoaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, meet)
    this.router.navigateByUrl("/dashboard")
  }

  submitOrderaptaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet) {
    this.cli.placeOrderaptaddonmeet(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, meet)
    this.router.navigateByUrl("/dashboard")
  }
  submitOrderaptaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet) {
    this.cli.placeOrderaptaddoncode(building, street, city, zip, unit, squarefeet, orders, ordersprice, visitingdate, visitingtime, comments, addons, addonsprice, lockcode, meet)
    this.router.navigateByUrl("/dashboard")
  }
  
  addanotherunit(OrderForm:NgForm)
  {
    var building = OrderForm.controls['building'].value;
    var street = OrderForm.controls['street'].value;
    var city = OrderForm.controls['city'].value;
    var zip = OrderForm.controls['zip'].value;
    // var unit = OrderForm.controls['unit'].value;
    var squarefeet = OrderForm.controls['squarefeet'].value;
    // var total = OrderForm.controls['total'].value;
    // var orders = OrderForm.controls['orders'].value;
    // // var addons = OrderForm.controls['addons'].value;
    // // var meet = OrderForm.controls['meet'].value;
    // // var lockcode = OrderForm.controls['lockcode'].value;
    // // var meet = OrderForm.controls['meet'].value;
    // var visitingdate = OrderForm.controls['visitingdate'].value;
    // var visitingtime = OrderForm.controls['visitingtime'].value;
    // var comments = OrderForm.controls['comments'].value;
    // if(unit!==null)
    // {
    //   if(addons!==null)
    //   {
    //     if(meet!==null)
    //     {
    //       this.cli.placeOrderaptaddonmeet(building, street, city, zip, unit, squarefeet, orders, addons, meet, total, visitingdate, visitingtime, comments)
    //     } 
    //     else
    //     {
    //       this.cli.placeOrderaptaddoncode(building, street, city, zip, unit, squarefeet, orders, addons, lockcode, meet, total,  visitingdate, visitingtime, comments)
    //     }     
    //   }
    //   else{
    //     if (meet !== null)
    //     {
    //       this.cli.placeOrderaptnoaddonmeet(building, street, city, zip, unit, squarefeet, orders, meet, total, visitingdate, visitingtime, comments)
    //     }
    //     else{
    //       this.cli.placeOrderaptnoaddoncode(building, street, city, zip, unit, squarefeet, orders, lockcode, meet, total, visitingdate, visitingtime, comments)
    //     }
        
    //   }
    // }
    // else{
    //   if (addons !== null) {
    //     if (meet !== null) {
    //       this.cli.placeOrdergenaddonmeet(building, street, city, zip, squarefeet, orders, addons, meet, total, visitingdate, visitingtime, comments)
    //     }
    //     else {
    //       this.cli.placeOrdergenaddoncode(building, street, city, zip, squarefeet, orders, addons, lockcode, meet, total, visitingdate, visitingtime, comments)
    //     }
    //   }
    //   else {
    //     if (meet !== null) {
    //       this.cli.placeOrdergennoaddonmeet(building, street, city, zip, squarefeet, orders, meet, total, visitingdate, visitingtime, comments)
    //     }
    //     else {
    //       this.cli.placeOrdergennoaddoncode(building, street, city, zip, squarefeet, orders, lockcode, meet, total, visitingdate, visitingtime, comments)
    //     }

    //   }
      
     
    // }
  
    // this.cli.placeOrder(street, city, zip, unit, squarefeet, total, orders, addons, lockcode, meet, visitingdate, visitingtime, comments);
    this.router.navigateByUrl("/placeorder")

  }
  ngOnInit() {
    this.property = this.cli.getBuilding2();
  }

}
