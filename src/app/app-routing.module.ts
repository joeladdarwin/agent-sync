import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../app/shared/auth.guard";



import { AppComponent } from "./app.component";
import { LoginComponent } from "./client/login/login.component";
import { RegisterComponent } from "./client/register/register.component";
import { ForgetinfoComponent } from "./client/forgetinfo/forgetinfo.component";
import { DashboardComponent } from "./client/dashboard/dashboard/dashboard.component";
import { ThanksComponent } from './client/thanks/thanks.component';
import { ProfileComponent } from "./client/profile/profile.component";
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




const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forget", component: ForgetinfoComponent },
  { path: "thanks", component: ThanksComponent },
  { path: "dashboard", component: DashboardComponent },

  { path: "", redirectTo: 'login', pathMatch: 'full'},
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ProfileComponent },
  { path: "loginsent", component: LoginsentComponent },
  { path: "placeorder", component: PlaceorderComponent },
  { path: "myorder", component: MyorderComponent },
   { path: "myaccount", component: MyaccountComponent },
   { path: "deliveries", component: DeliveriesComponent },
   { path: "address", component: AddressComponent },
   { path: "editprofile", component: EditprofileComponent },
   { path: "unitnumber", component: UnitnumberComponent },
   { path: "myinvoices", component: MyinvoicesComponent },
   { path: "squarefeet", component: SquarefeetComponent },
   { path: "product", component: ProductsComponent },
   { path: "access", component: AccessComponent },
   { path: "date", component: DateComponent },
   { path: "time", component: TimeComponent },
   { path: "comment", component: CommentsComponent },
   { path: "revieworder", component: RevieworderComponent },
   { path: "completenew", component: CompletenewComponent },
   { path: "complete", component: CompleteComponent },
   { path: "price", component: PriceComponent }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
