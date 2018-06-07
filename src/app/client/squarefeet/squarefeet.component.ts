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
  ap = 145;
  b = "751-1500";
  bp = 175;
  c = "2251-3000";
  cp = 205;
  d = "3001-3750";
  dp = 235;
  e = "3751-4500";
  ep = 275;
  f = "4501-5250";
  fp = 305;
  g = "5251";
  gp = 335;
  

  constructor(private cli: ClientinfoService, private router : Router) { }
  sfhma()
  {
    this.cli.updateHomesqft(this.a, this.ap )
    this.router.navigateByUrl("/product")
  }
  sfhmb()
  {
    this.cli.updateHomesqft(this.b, this.bp)
    this.router.navigateByUrl("/product")
  }
  sfhmc() {
    this.cli.updateHomesqft(this.c, this.cp )
    this.router.navigateByUrl("/product")
  }
  sfhmd() {
    this.cli.updateHomesqft(this.d, this.dp)
    this.router.navigateByUrl("/product")
  }
  sfhme() {
    this.cli.updateHomesqft(this.e, this.ep)
    this.router.navigateByUrl("/product")
  }
  sfhmf() {
    this.cli.updateHomesqft(this.f, this.fp)
    this.router.navigateByUrl("/product")
  }
  sfhmg() {
    this.cli.updateHomesqft(this.g, this.gp)
    this.router.navigateByUrl("/product")
  }
  ngOnInit() {
  }

}
