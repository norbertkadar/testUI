import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authentication: AuthService,
              public router: Router) {
  }


  canActivate(): boolean {
    if (!this.authentication.isAuth()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
