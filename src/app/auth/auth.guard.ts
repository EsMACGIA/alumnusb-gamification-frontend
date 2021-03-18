
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const isAuthenticated = this.authService.isAuthenticated();
    if (!isAuthenticated) {
        this.authService.logout();
        window.location.href = '';
        return false;
      }

    if (route.data.admin !== this.authService.isAdmin()) {
      this.router.navigate(['/']);
      return false;
    }
      // Authorised so return true
      return true;
    }
}
