import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../../shared/clientinfo.service';
import { Observable } from '@firebase/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[ClientinfoService]
 
})
export class DashboardComponent implements OnInit {
  name:any;
  message: any;
  constructor(private clientinfocervice: ClientinfoService, private router: Router) {
   this.name = this.clientinfocervice.getUsername();
    this.message = "You have 1 appointment scheduled for today, and 2 coming up this week";
  }

  ngOnInit() {
  }
 
}
