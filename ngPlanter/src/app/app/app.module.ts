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



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SuccessComponent } from './success/success.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/auth.guard';
import { MainComponent } from './main/main.component';
import { Dht11Component } from './dht11/dht11.component';
import { SoilsensorComponent } from './soilsensor/soilsensor.component';
import { LightsensorComponent } from './lightsensor/lightsensor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginsuccessComponent,
    SignupComponent,
    SuccessComponent,
    UserProfileComponent,
    MainComponent,
    Dht11Component,
    SoilsensorComponent,
    LightsensorComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    ],
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
    FontAwesomeModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] ,
  providers:  [ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
