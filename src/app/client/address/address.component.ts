import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Observable } from '@firebase/util';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers : [ ClientinfoService]
})
export class AddressComponent implements OnInit {

  constructor(private cli: ClientinfoService) { }

  ngOnInit() {
  }

}
