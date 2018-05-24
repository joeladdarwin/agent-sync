import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  product=[
    {id:'10.00',name:'AM'},
    {id:'11.00',name:'AM'},
    {id:'12.00',name:'PM'},
    {id:'1.00',name:'PM'},
    {id:'2.00',name:'PM'},
   
   
   

  ]


  constructor() { }

  ngOnInit() {
  }

}
