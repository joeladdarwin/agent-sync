import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../app/shared/auth.guard'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '../polyfills';
import { ToastrModule } from 'ngx-toastr';

import { environment } from "../environments/environment";
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { ForgetinfoComponent } from './client/forgetinfo/forgetinfo.component';
import { DashboardComponent } from './client/dashboard/dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { ThanksComponent } from './client/thanks/thanks.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { ProfileComponent } from './client/profile/profile.component';

import { OrderunitComponent } from './client/orderunit/orderunit.component';
import { OrderaddressComponent } from './client/orderaddress/orderaddress.component';
import { PropertysizeComponent } from './client/propertysize/propertysize.component';
import { SelectsquarefeetComponent } from './client/selectsquarefeet/selectsquarefeet.component';
import { SelectproductsComponent } from './client/selectproducts/selectproducts.component';
import { SelectaccesspropertyComponent } from './client/selectaccessproperty/selectaccessproperty.component';
import { SelectdateComponent } from './client/selectdate/selectdate.component';
import { SelecttimeComponent } from './client/selecttime/selecttime.component';
import { AdditionalnotesComponent } from './client/additionalnotes/additionalnotes.component';


import { LoginsentComponent } from './client/loginsent/loginsent.component';
import { PlaceorderComponent } from './client/placeorder/placeorder.component';
import { MyorderComponent } from './client/myorder/myorder.component';
import { MyaccountComponent } from './client/myaccount/myaccount.component';
import { DeliveriesComponent } from './client/deliveries/deliveries.component';
import { AddressComponent } from './client/address/address.component';
import { EditprofileComponent } from './client/editprofile/editprofile.component';
import { UnitnumberComponent } from './client/unitnumber/unitnumber.component';
import { MyinvoicesComponent } from './client/myinvoices/myinvoices.component';
import { SquarefeetComponent } from './client/squarefeet/squarefeet.component';
import { ProductsComponent } from './client/products/products.component';
import { AccessComponent } from './client/access/access.component';
import { DateComponent } from './client/date/date.component';
import { TimeComponent } from './client/time/time.component';
import { CommentsComponent } from './client/comments/comments.component';
import { RevieworderComponent } from './client/revieworder/revieworder.component';
import { CompletenewComponent } from './client/completenew/completenew.component';
import { CompleteComponent } from './client/complete/complete.component';
import { PriceComponent } from './client/price/price.component';
import { AddonsComponent } from './client/addons/addons.component';
import { SlideviewComponent } from './client/slideview/slideview.component';



import { AdminLayoutComponent } from './admin/layout/admin-layout/admin-layout/admin-layout.component';

import { NotificationComponent } from './admin/notification/notification.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';

import { FooterComponent } from './admin/component/footer/footer.component';

import { UsersComponent } from './admin/component/users/users.component';

import { AdminLoginComponent } from './admin/component/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/component/admin-dashboard/admin-dashboard.component';
import { OrdersComponent } from './admin/component/orders/orders.component';
import { AdminHeaderComponent } from './admin/component/admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin/component/admin-sidenav/admin-sidenav.component';
import { AdminPaymentComponent } from './admin/component/admin-payment/admin-payment.component';
import { UserdetailsComponent } from './admin/component/userdetails/userdetails.component';
import { AgentloginComponent } from './agent/agentlogin/agentlogin.component';
import { AgentdashboardComponent } from './agent/agentdashboard/agentdashboard.component';
import { AgentordersComponent } from './agent/agentorders/agentorders.component';
import { AgentsidenavComponent } from './agent/agentsidenav/agentsidenav.component';
import { AgentheaderComponent } from './agent/agentheader/agentheader.component';
  





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetinfoComponent,
    DashboardComponent,
    ThanksComponent,
    NavbarComponent,
    ProfileComponent,
    LoginsentComponent,
    PlaceorderComponent,
    MyorderComponent,
    MyaccountComponent,
    DeliveriesComponent,
    
    AddressComponent,
    EditprofileComponent,
    UnitnumberComponent,
    MyinvoicesComponent,
    SquarefeetComponent,
    ProductsComponent,
    AccessComponent,
    DateComponent,
    TimeComponent,
    CommentsComponent,
    RevieworderComponent,
    CompletenewComponent,
    CompleteComponent,
    PriceComponent,
    AddonsComponent,
    SlideviewComponent,
   
    AdminLayoutComponent,

    NotificationComponent,
    UserProfileComponent,
  
    FooterComponent,
    
    UsersComponent,

    AdminLoginComponent,
    AdminDashboardComponent,
    OrdersComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    AdminPaymentComponent,
    UserdetailsComponent,
    AgentloginComponent,
    AgentdashboardComponent,
    AgentordersComponent,
    AgentsidenavComponent,
    AgentheaderComponent
  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
    

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({
      timestampsInSnapshots: true,
    });
    afs.firestore.enablePersistence();
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
