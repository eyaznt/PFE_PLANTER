import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faUser} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private router: Router) {}
  faUser = faUser;
  goToUsers(){
    this.router.navigate(['/admindash/users']);
  }
  goToPlants(){
    this.router.navigate(['/admindash/plants']);
  }
}
