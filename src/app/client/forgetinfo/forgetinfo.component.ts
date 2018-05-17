import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-forgetinfo',
  templateUrl: './forgetinfo.component.html',
  styleUrls: ['./forgetinfo.component.scss']
})
export class ForgetinfoComponent implements OnInit {
  from: 'josh@sonderworks.com';
  endpoint = `https://agent-sync-sonder.firebaseapp.com/forget`;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  sendEmail() {
    const data = {
      toEmail: 'joeladdarwin@gmail.com',
      toName: 'Joe'
    }

    this.http.post(this.endpoint, data).subscribe()

  }
}
