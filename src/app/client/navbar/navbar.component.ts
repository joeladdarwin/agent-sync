import { Component, OnInit, Input } from '@angular/core';
import { ClientinfoService } from '../../shared/clientinfo.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[ClientinfoService]
})
export class NavbarComponent implements OnInit {
  property;
  @Input() title : string;
  constructor(private cli:ClientinfoService) { }

  ngOnInit() {
    this.property = this.cli.getBuilding2();
  }

}
