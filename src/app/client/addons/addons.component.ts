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
  constructor(private cli:ClientinfoService ) { }
  addonsSubmit(addonsForm)
  {
    this.cli.updateAddons(this.addons, this.subtotal)
  }
  ngOnInit() {
    this.property = this.cli.getBuilding2()
  }
  toggleClass(e, price, addon) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-remove')) {
      this.subtotal = this.subtotal - price;
      this.addons = this.addons.replace(addon + ",", "");
      console.log(this.addons);
      // this.orders = this.orders.filter(item => item !== order)
      classList.remove('btn-remove');
      classList.add('btn-secondary');
      console.log(this.addons);
    } else if (classes.includes('btn-secondary')) {
      classList.add('btn-remove');
      classList.remove('btn-secondary');
      this.subtotal = this.subtotal + price;

      this.addons = this.addons + addon + ",";
      console.log(this.addons);
    }
  }
}
