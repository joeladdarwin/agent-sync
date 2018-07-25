import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { ClientinfoService } from '../../../shared/clientinfo.service';
import { ToastrService } from 'ngx-toastr';


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
<<<<<<< HEAD
  
  constructor(private cli : ClientinfoService) {
=======
  // minDate = new Date(Date.now() + (5 * 24 * 60 * 60 * 1000));
  // maxDate = new Date(2025, 0, 1);
  // myFilter = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }
  constructor(private cli: ClientinfoService, private tstr: ToastrService) {
>>>>>>> 3382e3f67baed9b4870eed6a33a5af0a4d40afee
    
   }
   query(order)
   {
     this.property = this.cli.queryorder(order);
     
   }
  delete(order) {
    this.property = this.cli.deleteorder(order);
    this.tstr.warning('Order Deleted!')
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
