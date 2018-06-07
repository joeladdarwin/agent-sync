import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';

@Component({
  selector: 'app-unitnumber',
  templateUrl: './unitnumber.component.html',
  styleUrls: ['./unitnumber.component.scss'],
  providers: [ClientinfoService]
})
export class UnitnumberComponent implements OnInit {
  public amount:number;

 buttonstatus;
 public cone=true;
 public ctwo=true;
  
  addItem(){
    if(this.amount < 10){
      this.amount = this.amount + 1;
      console.log('plus is : ' + this.amount)
    }else{
      this.buttonstatus=true;
    }
    
   
    
  
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
  




  constructor(private cli: ClientinfoService) { }
  updatetotalunit() {
    this.cli.updatetotalbuilding(this.amount)
    
  }
  ngOnInit() {
    this.amount=1;
  }

}
