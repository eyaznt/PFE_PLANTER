import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiredRole = route.data['requiredRole'];
    const currentUserRole = sessionStorage.getItem('currentUserRole'); // retrieve the user role from the session storage
  
    if (!currentUserRole || currentUserRole !== requiredRole) { // check if currentUserRole is not equal to requiredRole or null/undefined
      console.log('Access denied for user with role ' + currentUserRole);
      this.router.navigate(['/login']);
      return false;
    }
  
    console.log('AuthGuard activated');
    return true;
  }
  }
