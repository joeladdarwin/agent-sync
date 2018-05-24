import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unitnumber',
  templateUrl: './unitnumber.component.html',
  styleUrls: ['./unitnumber.component.scss']
})
export class UnitnumberComponent implements OnInit {
  public amount:number;

 buttonstatus;
 public cone=true;
 public ctwo=true;

  addItem(){
    this.amount=this.amount+1;
    console.log('plus is : '+this.amount)
   
    
  
  }

  removeItem(){
    if(this.amount==0){
     this.buttonstatus=true;
    
    }
    if(this.amount>=1){
      this.amount=this.amount-1;
      this.buttonstatus=false;
     console.log('plus is : '+this.amount)
     
     
    }
  
  }
  




  constructor() { }

  ngOnInit() {
    this.amount=0;
  }

}
