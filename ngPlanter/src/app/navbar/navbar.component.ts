import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private userService: UserService, private http: HttpClient) {}

  logout() {
    const email = sessionStorage.getItem('email');
    if (email) {
      this.userService.logoutUserFromRemote(email).subscribe(() => {
        sessionStorage.removeItem('email');
        location.reload();
      });
    }
  }
}
