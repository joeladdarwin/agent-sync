import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers:[ClientinfoService]
})
export class ProfileComponent implements OnInit {
name:any;
email:any;
phone:any;

  constructor(private cli: ClientinfoService) { }

  ngOnInit() {
    this.name = this.cli.getUsername();
    this.email = this.cli.getEmail();
    this.phone = this.cli.getPhone();
  }

}
