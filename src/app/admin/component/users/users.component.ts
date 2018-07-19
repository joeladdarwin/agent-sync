import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../../shared/clientinfo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers : [ClientinfoService]
})
export class UsersComponent implements OnInit {
  name : any;


  constructor(private cli : ClientinfoService, private router: Router) {
    this.name = this.cli.QueryOrder();
    this.name="test";
   }

  ngOnInit() {
  }

}
