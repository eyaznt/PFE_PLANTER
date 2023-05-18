import { ChartModule } from 'angular-highcharts';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/auth.guard';
import { MainComponent } from './main/main.component';
import { Dht11Component } from './dht11/dht11.component';
import { SoilsensorComponent } from './soilsensor/soilsensor.component';
import { LightsensorComponent } from './lightsensor/lightsensor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SidenavComponent } from './admindashboard/sidenav/sidenav.component';
import { PlantsControllComponent } from './admindashboard/plants-controll/plants-controll.component';
import { UsersControllComponent } from './admindashboard/users-controll/users-controll.component';
import { AdminheaderComponent } from './admindashboard/adminheader/adminheader.component';
import { UserModalComponent } from './admindashboard/users-controll/user-modal/user-modal.component';
import { PlantModalComponent } from './admindashboard/plants-controll/plant-modal/plant-modal.component';
import { UsermainComponent } from './dashboard/usermain/usermain.component';
import { TopWidgetComponent } from './dashboard/usermain/top-widget/top-widget.component';
import { UserplantersComponent } from './dashboard/usermain/userplanters/userplanters.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent,
    MainComponent,
    Dht11Component,
    SoilsensorComponent,
    LightsensorComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    AdmindashboardComponent,
    SidenavComponent,
    PlantsControllComponent,
    UsersControllComponent,
    AdminheaderComponent,
   UserModalComponent,
  PlantModalComponent,
  UsermainComponent,
  TopWidgetComponent,
  UserplantersComponent   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NoopAnimationsModule,
    ChartModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] ,
  providers:  [ AuthGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
