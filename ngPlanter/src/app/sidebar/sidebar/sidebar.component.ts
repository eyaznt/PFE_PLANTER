import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faUser,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}

  goToMain(){
    this.router.navigate(['/dashboard/main']);
  }
  goToProfile(){
    this.router.navigate(['/dashboard/user']);
  }

  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faUser = faUser;
  faContactBook = faContactBook;
  faHand = faHand;
  
}
