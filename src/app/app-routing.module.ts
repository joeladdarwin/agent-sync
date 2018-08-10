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
import { UserdetailsComponent } from './admin/component/userdetails/userdetails.component';
import { AdminPaymentComponent } from './admin/component/admin-payment/admin-payment.component';
import { AgentloginComponent } from './agent/agentlogin/agentlogin.component';
import { AgentdashboardComponent } from './agent/agentdashboard/agentdashboard.component';
import { AgentordersComponent } from './agent/agentorders/agentorders.component';
import { AgentsidenavComponent } from './agent/agentsidenav/agentsidenav.component';
import { AgentheaderComponent } from './agent/agentheader/agentheader.component';
import { LogindemoComponent } from './client/logindemo/logindemo.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forget", component: ForgetinfoComponent },
  { path: "thanks", component: ThanksComponent },
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "loginsent", component: LoginsentComponent },
  { path: "placeorder", component: PlaceorderComponent, canActivate: [AuthGuard] },
  { path: "myorder", component: MyorderComponent, canActivate: [AuthGuard] },
  { path: "myaccount", component: MyaccountComponent, canActivate: [AuthGuard] },
  { path: "deliveries", component: DeliveriesComponent, canActivate: [AuthGuard] },
  { path: "address", component: AddressComponent, canActivate: [AuthGuard] },
  { path: "editprofile", component: EditprofileComponent, canActivate: [AuthGuard] },
  { path: "unitnumber", component: UnitnumberComponent, canActivate: [AuthGuard] },
  { path: "myinvoices", component: MyinvoicesComponent, canActivate: [AuthGuard] },
  { path: "squarefeet", component: SquarefeetComponent, canActivate: [AuthGuard] },
  { path: "product", component: ProductsComponent, canActivate: [AuthGuard] },
  { path: "access", component: AccessComponent, canActivate: [AuthGuard] },
  { path: "date", component: DateComponent, canActivate: [AuthGuard] },
  { path: "time", component: TimeComponent, canActivate: [AuthGuard] },
  { path: "comment", component: CommentsComponent, canActivate: [AuthGuard] },
  { path: "revieworder", component: RevieworderComponent, canActivate: [AuthGuard] },
  { path: "completenew", component: CompletenewComponent, canActivate: [AuthGuard] },
  { path: "complete", component: CompleteComponent, canActivate: [AuthGuard] },
  { path: "price", component: PriceComponent, canActivate: [AuthGuard] },
  { path: "addons", component: AddonsComponent, canActivate: [AuthGuard] },
  { path: "slideview", component: SlideviewComponent, canActivate: [AuthGuard] },
  { path: "admin-layout", component: AdminLayoutComponent, canActivate: [AuthGuard] },
  { path: "notification", component: NotificationComponent, canActivate: [AuthGuard] },
  { path: "user-profile", component: UserProfileComponent, canActivate: [AuthGuard] },
  
  { path: "footer", component: FooterComponent, canActivate: [AuthGuard] },
 
  { path: "admin-users", component: UsersComponent, canActivate: [AuthGuard] },
 
  { path: "admin-login", component: AdminLoginComponent, canActivate: [AuthGuard] },
  { path: "admin-dashboard", component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: "admin-orders", component: OrdersComponent, canActivate: [AuthGuard] },
  { path: "admin-header", component: AdminHeaderComponent, canActivate: [AuthGuard] },
  { path: "admin-sidenav", component: AdminSidenavComponent, canActivate: [AuthGuard] },
  { path: "userdetails", component: UserdetailsComponent, canActivate: [AuthGuard] },
  { path: "admin-payment", component: AdminPaymentComponent, canActivate: [AuthGuard] },
  { path: "agent-header", component: AgentheaderComponent, canActivate: [AuthGuard] },
  { path: "agent-sidenav", component: AgentsidenavComponent, canActivate: [AuthGuard] },
  { path: "agent-dashboard", component: AgentdashboardComponent, canActivate: [AuthGuard] },
  { path: "agent-login", component: AgentloginComponent, canActivate: [AuthGuard] },
  { path: "agent-orders", component: AgentordersComponent, canActivate: [AuthGuard] },
  { path: "logindemo", component: LogindemoComponent, canActivate: [AuthGuard] },
  
 
  
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
