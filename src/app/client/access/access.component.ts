import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
  product=[
    {name:'Meet agent on site'},
    {name:'Lockbox'},
    {name:'Access Code'},
    {name:'Other'},
   
   

  ]

  constructor() { }

  ngOnInit() {
  }

}
