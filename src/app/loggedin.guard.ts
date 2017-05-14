import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "app/shared/auth.service";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private as: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let boolVal =  this.as.isLoggedIn;
    return boolVal;
    }
}
