import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Observable } from '@firebase/util';


@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.scss'],
  providers:[ClientinfoService]
})
export class AddonsComponent implements OnInit {
  title = "New Order > First Unit";
  subtotal:number=0;
  addons="";
  addon;
  property;
  Custom="Custom quote"
  constructor(private cli:ClientinfoService ) { }
  addonsSubmit(addonsForm)
  {
    this.cli.updateAddons(this.addons, this.subtotal)
  }
  ngOnInit() {
    this.property = this.cli.getBuilding2()
  }
  addon1(e, price, addon)
  {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateAddon1(addon, price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteAddon1();
    }
  }
  addon2(e, price, addon) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateAddon2(addon, price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteAddon2();
    }
  }
  addon3(e, price, addon)
  {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateAddon3(addon, price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteAddon3();
    }

  }
  toggleClass(e, price, addon) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.subtotal = this.subtotal - price;
      this.addons = this.addons.replace(addon + ",", "");
     
      // this.orders = this.orders.filter(item => item !== order)
      classList.remove('btn-selected');
      classList.add('btn1');
     
    } else if (classes.includes('btn1')) {
      classList.add('btn-selected');
      classList.remove('btn1');
      this.subtotal = this.subtotal + price;

      this.addons = this.addons + addon + ",";
 
    }
  }
}
