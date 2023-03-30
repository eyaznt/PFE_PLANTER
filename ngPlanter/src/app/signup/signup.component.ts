import { User } from '../user';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };
  
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,  private userService: UserService,) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  SignUp() {
    if (this.signupForm.invalid) {
      return;
    }
  
    const newUser = new User(
      this.signupForm.value.email,
      this.signupForm.value.username,
      this.signupForm.value.password,
      parseInt(this.signupForm.value.phone)
    );
  
    this.userService.registerUserFromRemote(newUser).subscribe({
      next: data => {
        console.log('response received');
        alert('Sign up successful!');
        this.router.navigate(['/login']);
      },
      error: error => {
        console.error('exception occurred');
        console.error(error);
        console.log(error.status);
        console.log(error.error);
        alert('Email already exists, please try another one.');
      }
    });
  }
    
  //alert('Sign up successful!');

  get username() { return this.signupForm.get('username'); }
  get email() { return this.signupForm.get('email'); }
  get phone() { return this.signupForm.get('phone'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  }

}




// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';'
// import { User } from '../user';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   user = new User();
//   confirmedPassword: string = '';
//   msg = '';

//   constructor(private _service: UserService, private _router: Router) {}

//   ngOnInit() {}

//   signupUser() {
//     if (this.user.password !== this.confirmedPassword) {
//       this.msg = "Passwords don't match, please enter them again.";
//       return;
//     }
//     this._service.registerUserFromRemote(this.user).subscribe({
//       next: data => {
//         console.log('response received');
//         this._router.navigate(['/success']);
//       },
//       error: error => {
//         console.log('exception occurred');
//         this.msg = 'Email already exists, please try another one.';
//         console.error(error);
//         console.log(error.status);
//         console.log(error.error);
//       }
//     });
//   }

//   gotologin() {
//     this._router.navigate(['/login']);
//   }
// }

