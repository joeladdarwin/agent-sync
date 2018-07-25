import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { ClientinfoService } from '../../../shared/clientinfo.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [ClientinfoService],
})
export class OrdersComponent implements OnInit {
  data;
  property;
  // displayedColumns = ['building', 'street', 'ordersprice', 'orders'];
  // dataSource = new MatTableDataSource<Element>(this.data);
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  
  constructor(private cli : ClientinfoService) {
    
   }
   query(order)
   {
     this.property = this.cli.queryorder(order);
     console.log(this.property);
   }
  ngOnInit() {
    this.data = this.cli.Queryorder2();
    
    // console.log("Elemt"+this.data);
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator
  //   this.dataSource.sort = this.sort;
  // }
}
