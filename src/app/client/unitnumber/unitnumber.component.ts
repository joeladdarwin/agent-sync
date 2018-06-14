import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';

@Component({
  selector: 'app-unitnumber',
  templateUrl: './unitnumber.component.html',
  styleUrls: ['./unitnumber.component.scss'],
  providers: [ClientinfoService]
})
export class UnitnumberComponent implements OnInit {
  title = "New Order";
  public totalunits:number;

 buttonstatus;
 public cone=true;
 public ctwo=true;
  
  addItem(){
    if(this.totalunits < 10){
      this.totalunits = this.totalunits + 1;
      console.log('plus is : ' + this.totalunits)
    }else{
      this.buttonstatus=true;
    }
    
   
    
  
  }

  removeItem(){
    if(this.totalunits==0){
     this.buttonstatus=true;
    
    }
    if(this.totalunits>=1){
      this.totalunits=this.totalunits-1;
      this.buttonstatus=false;
     console.log('plus is : '+this.totalunits)
     
     
    }
  
  }
  




  constructor(private cli: ClientinfoService) { }
  updatetotalunit() {
    this.cli.updatetotalbuilding(this.totalunits)
    
  }
  ngOnInit() {
    this.totalunits=1;
  }

}
