import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
  title = "New Order > First Unit";

 
   isActive:boolean;
  constructor() { }

  ngOnInit() {
    this.isActive=false;
    console.log(this.isActive);

  }
  activeButton()
  {
    this.isActive=true;
    console.log(this.isActive);

    }

}
