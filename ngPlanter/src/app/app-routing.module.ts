import { SignupComponent } from './signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard'
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UsersControllComponent } from './admindashboard/users-controll/users-controll.component';
import { PlantsControllComponent } from './admindashboard/plants-controll/plants-controll.component';
import { UsermainComponent } from './dashboard/usermain/usermain.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'admindash', component: AdmindashboardComponent, children: [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component:  UsersControllComponent},
    { path: 'plants', component:PlantsControllComponent }
  ]  , canActivate: [AuthGuard]  ,data: { requiredRole: 'ADMIN' } },
  { path: 'dashboard', component: DashboardComponent , children: [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: UsermainComponent },
    { path: 'main', component: MainComponent }
  ] , canActivate: [AuthGuard] ,  data: { requiredRole: 'USER' }  },
  {path:'user', component:UsermainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
