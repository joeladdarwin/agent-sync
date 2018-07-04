import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-completenew',
  templateUrl: './completenew.component.html',
  styleUrls: ['./completenew.component.scss'],
  providers: [ClientinfoService]
})
export class CompletenewComponent implements OnInit {
  title="New Order > First Unit";
  property;
  constructor(private cli: ClientinfoService ) { }
  submitorder()
  {
    this.cli.placeOrder("Order Placed")
  }
  addanotherunit()
  {
    this.cli.placeOrder("Order Placed");
  }
  ngOnInit() {
    this.property = this.cli.getBuilding2();
  }

}
