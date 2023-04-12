import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authentication = false;

  constructor() { }

  login() {
    // Set the authentication state to true
    this.authentication = true;
  }

  // Check if user is logged in by checking if the authentication state is true
  isLoggedIn(): boolean {
    return this.authentication;
  }

  // Set the authentication state to false to log the user out
  logout() {
    this.authentication = false;
  }
}
