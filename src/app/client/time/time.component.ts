import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'], 
  providers: [ClientinfoService]
})
export class TimeComponent implements OnInit {
property;


  constructor(private cli:ClientinfoService) { 
    
  }
  updatetime(time) {
    this.cli.updatevisitingtime(time)

  }
  ngOnInit() {
    this.property = this.cli.getBuilding2();
  }

}
