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
  title="New Order > First Order";
  property;
  subtotal:number = 0;
  spw = false;
  inc = false;
  status;
  Custom="Custom quote";
  orderedproducts:string[]=[];
  orders:string=""; 
  error;
  constructor(private cli : ClientinfoService, private router: Router) { }

  ngOnInit() {
    this.property = this.cli.getBuilding2()
    
  }
  productspush(productsform)
  {
    this.cli.updateOrders(this.orderedproducts,this.subtotal)
    if (this.subtotal > 0 || this.Custom ==="Custom quote")
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
        this.router.navigateByUrl("/access")
      }
      
    }
  }
 
  product1(e, product1, product1price) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateProduct1(product1, product1price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteProduct1();
    }

  }


  product2(e, product2, product2price) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateProduct2(product2, product2price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteProduct2();
    }

  }
  product3(e, product3, product3price) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateProduct3(product3, product3price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteProduct3();
    }

  }
  product4(e, product4, product4price) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateProduct4(product4, product4price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteProduct4();
    }

  }
  product5(e, product5, product5price) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateProduct5(product5, product5price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteProduct5();
    }

  }
  product6(e, product6, product6price) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateProduct6(product6, product6price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteProduct6();
    }

  }
  product7(e, product7, product7price) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateProduct7(product7, product7price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteProduct7();
    }

  }
  product8(e, product8, product8price) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.cli.updateProduct8(product8, product8price)

    }
    else if (classes.includes('btn1')) {
      this.cli.deleteProduct8();
    }
  }
      product9(e, product9, product9price)
      {
        var classList = e.target.classList;
        var classes = e.target.className;
        if (classes.includes('btn-selected')) {
          this.cli.updateProduct9(product9, product9price)

        }
        else if (classes.includes('btn1')) {
          this.cli.deleteProduct9();
        }

      }
      product10(e, product10, product10price)
      {
        var classList = e.target.classList;
        var classes = e.target.className;
        if (classes.includes('btn-selected')) {
          this.cli.updateProduct10(product10, product10price)

        }
        else if (classes.includes('btn1')) {
          this.cli.deleteProduct10();
        }

      }
      product11(e, product11, product11price)
      {
        var classList = e.target.classList;
        var classes = e.target.className;
        if (classes.includes('btn-selected')) {
          this.cli.updateProduct11(product11, product11price)

        }
        else if (classes.includes('btn1')) {
          this.cli.deleteProduct11();
        }

      }
      product12(e, product12, product12price)
      {
        var classList = e.target.classList;
        var classes = e.target.className;
        if (classes.includes('btn-selected')) {
          this.cli.updateProduct12(product12, product12price)

        }
        else if (classes.includes('btn1')) {
          this.cli.deleteProduct7();
        }

      }
      product13(e, product13, product13price)
      {
        var classList = e.target.classList;
        var classes = e.target.className;
        if (classes.includes('btn-selected')) {
          this.cli.updateProduct13(product13, product13price)

        }
        else if (classes.includes('btn1')) {
          this.cli.deleteProduct13();
        }

      }



  toggleClass(e,price,order) {
    var classList = e.target.classList;
    var classes = e.target.className;
    if (classes.includes('btn-selected')) {
      this.subtotal = this.subtotal-price;
     this.orders = this.orders.replace(order+",","");
     console.log(this.orders);
      for (var i = this.orderedproducts.length - 1; i >= 0; i--) {
        if (this.orderedproducts[i] === order) {
          this.orderedproducts.splice(i, 1);
          // break;       //<-- Uncomment  if only the first term has to be removed
        }
      }
     
      // this.orders = this.orders.filter(item => item !== order)
      classList.remove('btn-selected');
      classList.add('btn1');
      console.log(this.orders);
    } else if (classes.includes('btn1')) {
      classList.add('btn-selected');
      classList.remove('btn1');
      this.orderedproducts.push(order)
      this.subtotal = this.subtotal+price;
      
      this.orders = this.orders + order+"," ;
      console.log(this.orders);
    }
  }
 
   }

