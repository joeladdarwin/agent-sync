import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product=[
    {name:'Photography'},
    {name:'Video Tour'},
    {name:'360 Tour'},
    {name:'Single Property Website'},
    {name:'Floor Plans (B&W)'},
    {name:'Floor Plans (Color)'},
    {name:'Floor Plans (Color + Furniture)'},
    {name:'Double-Sided Flyer'},
    {name:'Brochure (8 Page)'},
    {name:'Brochure (4 Page)'},
   

  ]


  constructor() { }

  ngOnInit() {
  }

}
