import { Component, OnInit } from '@angular/core';   // import Component and OnInit classes from @angular/core
import { NgForm } from '@angular/forms';  // import Component and OnInit classes from @angular/core
import { Router } from '@angular/router';  // import Router class from @angular/router
import { User } from '../user';   // import User class from ../user
import { UserService } from '../user.service';  // import UserService class from ../user.service
@Component({
  selector: 'app-login', // define the selector of this component
  exportAs: 'ngForm' , // define the name of this component when exported
  templateUrl: './login.component.html', // define the path of the html template file
  styleUrls: ['./login.component.css'] // define the path of the css stylesheet file
})
export class LoginComponent implements OnInit { // define the LoginComponent class and implement the OnInit interface
   user= new User(); // create a new instance of User
   msg=""; // initialize msg to an empty string

  constructor(private _service : UserService, private _router : Router){ } // create a constructor with _service and _router parameters

  ngOnInit() { // implement the ngOnInit method
      
  }
  loginUser() { // define the loginUser method
    this._service.loginUserFromRemote(this.user).subscribe({ // call loginUserFromRemote method of _service object and subscribe to the result
      next: data => { console.log("response received"); // if successful, log a message and navigate to loginsuccess route
      this._router.navigate(['/loginsuccess'])
    },
      error: error => { // if error occurred, log an error message and set msg to "Bad credentials"
        console.log("exception occurred");
        this.msg="Bad credentials ,please enter valid email and password";
        console.error(error);
        console.log(error.status);
        console.log(error.error);
      }
    });
  }
  gotoregistration(){
    this._router.navigate(['/registration'])
  }
  
  
  
}
