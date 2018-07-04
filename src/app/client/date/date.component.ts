import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule,  } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { ClientinfoService } from '../../shared/clientinfo.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [ClientinfoService]
})
export class DateComponent implements OnInit {
  title="New Order>First Order";
  property;
  minDate = new Date(Date.now() + (5 * 24 * 60 * 60 * 1000));
  maxDate = new Date(2025, 0, 1);
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  constructor(private cli: ClientinfoService, ) {

   }
  updatedate(dateform:NgForm)
   {
     var date = dateform.controls['picker'].value;
     this.cli.updateVisitingdate(date)
   }
  ngOnInit() {
    this.property = this.cli.getBuilding2();
  }

}
