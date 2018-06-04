import { Component, OnInit } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { Observable } from '@firebase/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-squarefeet',
  templateUrl: './squarefeet.component.html',
  styleUrls: ['./squarefeet.component.scss'],
  providers:[ClientinfoService]

})
export class SquarefeetComponent implements OnInit {
  a = "0-750";
  b = "751-1500";
  c = "2251-3000";
  d = "3001-3750";
  e = "3751-4500";
  f = "4501-5250";
  g = "5251";
  

  constructor(private cli: ClientinfoService, private router : Router) { }
  sfhma()
  {
    this.cli.updateHomesqft(this.a)
    this.router.navigateByUrl("/product")
  }
  sfhmb()
  {
    this.cli.updateHomesqft(this.b)
    this.router.navigateByUrl("/product")
  }
  sfhmc() {
    this.cli.updateHomesqft(this.c)
    this.router.navigateByUrl("/product")
  }
  sfhmd() {
    this.cli.updateHomesqft(this.d)
    this.router.navigateByUrl("/product")
  }
  sfhme() {
    this.cli.updateHomesqft(this.e)
    this.router.navigateByUrl("/product")
  }
  sfhmf() {
    this.cli.updateHomesqft(this.f)
    this.router.navigateByUrl("/product")
  }
  sfhmg() {
    this.cli.updateHomesqft(this.g)
    this.router.navigateByUrl("/product")
  }
  ngOnInit() {
  }

}
