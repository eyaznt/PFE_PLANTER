import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User();
  confirmedPassword: string = '';
  msg = '';

  constructor(private _service: UserService, private _router: Router) {}

  ngOnInit() {}

  signupUser() {
    if (this.user.password !== this.confirmedPassword) {
      this.msg = "Passwords don't match, please enter them again.";
      return;
    }
    this._service.registerUserFromRemote(this.user).subscribe({
      next: data => {
        console.log('response received');
        this._router.navigate(['/success']);
      },
      error: error => {
        console.log('exception occurred');
        this.msg = 'Email already exists, please try another one.';
        console.error(error);
        console.log(error.status);
        console.log(error.error);
      }
    });
  }

  gotologin() {
    this._router.navigate(['/login']);
  }
}

