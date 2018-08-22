import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../../shared/clientinfo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
  providers:[ClientinfoService]
})
export class AdminHeaderComponent implements OnInit {
  name:any;
  constructor(private clientinfocervice: ClientinfoService, private router: Router) {
    this.name = this.clientinfocervice.getUsername();
   }

  ngOnInit() {
  }

}
