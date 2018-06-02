import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Observable } from '@firebase/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers : [ ClientinfoService]
})
export class AddressComponent implements OnInit {

  constructor(private cli: ClientinfoService, private router : Router) { }
  addressSubmit(addressForm : NgForm)
  {
    var street = addressForm.controls['street'].value;
    var city = addressForm.controls['city'].value;
    var zip = addressForm.controls['zip'].value;
    var unit = addressForm.controls['unit'].value;

    this.cli.updateHomeaddress(street, city, zip, unit )
    this.router.navigateByUrl('/squarefeet')
  }
  ngOnInit() {
  }

}
