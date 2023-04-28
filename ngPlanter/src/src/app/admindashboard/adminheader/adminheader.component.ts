import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/user.service';
import {faBell,faSignOut} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/user';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent  {
  faBell = faBell;
  faSignOut=faSignOut;
  username: string = 'Admin';
  currentUser: User;
  constructor(
    private router: Router,
    private userService: UserService,
    private authGuard: AuthGuard,
    private authService: AuthService,
  ) {
    this.currentUser = new User('', '', '', 0);
  }

    
    logout() {
      this.router.navigate(['/login']);

    }
        
    
  }

