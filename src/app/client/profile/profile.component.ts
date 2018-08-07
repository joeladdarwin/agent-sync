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
profile:any;

  constructor(private cli: ClientinfoService) { }
// print()
// {
//   console.log("tried")
//   console.log(this.profile);
// }
  ngOnInit() {
    this.name = this.cli.getUsername();
    this.email = this.cli.getEmail();
    this.phone = this.cli.getPhone();
    // this.profile = this.cli.getuserdetails();
    // this.print();
  }

}
