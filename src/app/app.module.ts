import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";





import { environment } from "../environments/environment";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { ForgetinfoComponent } from './client/forgetinfo/forgetinfo.component';
import { DashboardComponent } from './client/dashboard/dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { ThanksComponent } from './client/thanks/thanks.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetinfoComponent,
    DashboardComponent,
    ThanksComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
