import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./client/login/login.component";
import { RegisterComponent } from "./client/register/register.component";
import { ForgetinfoComponent } from "./client/forgetinfo/forgetinfo.component";
import { DashboardComponent } from "./client/dashboard/dashboard/dashboard.component";
import { ThanksComponent } from './client/thanks/thanks.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forget", component: ForgetinfoComponent },
  { path: "thanks", component: ThanksComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "**", component: LoginComponent },
  { path: "", redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
