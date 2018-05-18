import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Observable } from '@firebase/util';
import { Client } from '../../shared/client';
@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss'],
  providers: [ClientinfoService]
})
export class ThanksComponent implements OnInit {
  users;
  constructor(private clientinfocervice : ClientinfoService) {
    this.users = this.clientinfocervice.usersCollection.valueChanges();
   }

  ngOnInit() {
  }

}
