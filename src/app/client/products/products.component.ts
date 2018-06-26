import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers:[ClientinfoService]
})
export class ProductsComponent implements OnInit {
  title="New Order>First Order";
  squarefeet;
  property;
  subtotal:number = 0;
  spw = false;
  inc = false;
  status;
  orders:string=""; 
  error;
  constructor(private cli : ClientinfoService, private router: Router) { }

  ngOnInit() {
    this.property = this.cli.getBuilding2()
    console.log(this.orders)
  }
  productspush(productsform)
  {
  
    if(this.subtotal>0)
    {
           
      if (this.orders.match(/Photography/gi) || this.orders.match(/Video/gi) )
      {
        this.cli.updateProducts(this.orders, this.subtotal)
        this.router.navigateByUrl("/addons")
      }
      else if (this.orders.match(/360/gi) || this.orders.match(/Floor/gi))
      {
        this.cli.updateProducts(this.orders, this.subtotal)
        this.router.navigateByUrl("/access")
      }else
      {
        this.cli.updateProducts(this.orders, this.subtotal)
        this.router.navigateByUrl("/comment")
      }
      
    }
  }
  toggleClass(e,price,order) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-remove')) {
      this.subtotal = this.subtotal-price;
     this.orders = this.orders.replace(order+",","");
     console.log(this.orders);
      // this.orders = this.orders.filter(item => item !== order)
      classList.remove('btn-remove');
      classList.add('btn-secondary');
      console.log(this.orders);
    } else if (classes.includes('btn-secondary')) {
      classList.add('btn-remove');
      classList.remove('btn-secondary');
      this.subtotal = this.subtotal+price;
      
      this.orders = this.orders + order+"," ;
      console.log(this.orders);
    }
  }
 
   }

