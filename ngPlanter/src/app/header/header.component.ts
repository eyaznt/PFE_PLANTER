import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user.service';
import { AuthGuard } from '../auth/auth.guard';
import {faBell,faSignOut} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBell = faBell;
  faSignOut=faSignOut;
  username: string = '';
  currentUser: User;
  userId: string = '';
  constructor(
    private router: Router,
    private userService: UserService,
    private authGuard: AuthGuard,
    private authService: AuthService,
  ) {
    this.currentUser = new User('', '', '', 0);
    this.userId = '';
  }
  ngOnInit(): void {
    const currentUserEmail = sessionStorage.getItem('currentUserEmail');
    if (currentUserEmail) {
      this.userService.getUserByEmail(currentUserEmail).subscribe(
        (response) => {
          this.currentUser = response;
          this.username = response.username; })
  }

    }
    logout() {
      const currentUserEmail = sessionStorage.getItem('currentUserEmail');
      if (currentUserEmail) {
        this.userService.logoutUserFromRemote(currentUserEmail).subscribe(() => {
          sessionStorage.removeItem('currentUserEmail');
          this.router.navigate(['/login']);
        });
      }
    }
        
    
  }

