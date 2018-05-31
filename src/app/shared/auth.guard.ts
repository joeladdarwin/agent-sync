import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth:AngularFireAuth, private router: Router ) {
    
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.authState
    .take(1)
    .map(user => !! user)
    .do(loggedIn => {
    if(!loggedIn)
    {
    console.log("Access Denied")
    this.router.navigate(['/login']);
    }
    else{
    console.log("no user")
    }
    })
  }
}
