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
  addonarray: string[] = []; 
 
  property;
  Custom="Custom quote"
  constructor(private cli:ClientinfoService ) { }
  addonsSubmit(addonsForm)
  {
    this.cli.updateAddon(this.addonarray, this.subtotal);
    this.cli.updateAddons(this.addons)
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
      classList.remove('btn-selected');
      classList.add('btn1');
      for (var i = this.addonarray.length - 1; i >= 0; i--) {
        if (this.addonarray[i] === addon) {
          this.addonarray.splice(i, 1);
          // break;       //<-- Uncomment  if only the first term has to be removed
        }
      }
   

     
      this.addons = this.addons.replace(addon + ",", "");
      // this.orders = this.orders.filter(item => item !== order)
     
     
    } else if (classes.includes('btn1')) {
      classList.add('btn-selected');
      classList.remove('btn1');
      
      this.addonarray.push(addon)
      console.log(this.addonarray);
      this.subtotal = this.subtotal + price;
      
      this.addons = this.addons + addon + ",";
 
    }
  }
}
