import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService 
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const user = new User(email, '', password, 0);
    this.userService.loginUserFromRemote(user).subscribe(
      (data: any) => {
        console.log("Login successful:", data);
        // if (data && data.email === 'admin@admin.com' && data.password === 'admin') {

        if (data && data.role === 'ADMIN') {
          console.log("Navigating to admin dashboard...");
          console.log(data);
          this.router.navigate(['/admindash']);
          
        } else {
          console.log("Navigating to user dashboard...");
          console.log(data);

          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        alert('Incorrect email or password');
        console.log("Login error:");
        console.error(error);
        console.log(error.status);
        console.log(error.error);
      }
    );
    }
    get email() {
      return this.loginForm.get('email');
    }
  
    get password() {
      return this.loginForm.get('password');
    }
  }
  // import { User } from './../user';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service' ;

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   loginForm!: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private userService: UserService // Inject your user service here
//   ) {}

//   ngOnInit() {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
      
//     });

//   }

// onSubmit() {
//   console.log(this.loginForm.value);
//   const email = this.loginForm.value.email;
//   const password = this.loginForm.value.password;
//   const user = new User(email, '', password, 0);

//   this.userService.loginUserFromRemote(user).subscribe(
//     (data) => {
//       // The authentication was successful, so set the current user and navigate the user to the home page
//       this.userService.setCurrentUser(data);
//       this.router.navigate(['/profile']);
//     },
//     (error) => {
//       // The authentication was unsuccessful, so display an error message to the user
//       alert('Incorrect email or password');
//       console.log("exception occurred");
//       console.error(error);
//       console.log(error.status);
//       console.log(error.error);
//     }
//   );
// }

//   get email() {
//     return this.loginForm.get('email');
//   }
//   get password() {
//     return this.loginForm.get('password');
//   }
// }
  
  


