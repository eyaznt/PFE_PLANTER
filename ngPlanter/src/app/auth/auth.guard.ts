import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuard activated');
    if (this.userService.isCurrentUserLogged()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

//   canActivate( // methode qui controle l'acces à d autre route
//   //route actuel et route suivant
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//   if (this.authService.isLoggedIn()) {
//     //si l user est authentifié return true pour acceder a page suivante
//     return true;
//   } else {
//     // Si l'utilisateur n'est pas authentifié, rester dans login
//     return this.router.parseUrl('/login');
//   }
// }

