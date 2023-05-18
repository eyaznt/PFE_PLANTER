import { Component, OnInit } from '@angular/core';
import { Planter } from 'src/app/planter';
import { PlanterService } from 'src/app/planter.service';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userplanters',
  templateUrl: './userplanters.component.html',
  styleUrls: ['./userplanters.component.css']
})
export class UserplantersComponent implements OnInit {
  userPlanter: Planter[] = [];
  currentUser: User | undefined;

  constructor(
    private planterService: PlanterService,
    private userService: UserService
  ) { }

  ngOnInit() {
    const userId = sessionStorage.getItem('userId') !== null ? sessionStorage.getItem('userId') : '';
    this.planterService.getReload().subscribe(status => {
      if (status === true) {
        this.getPlantersByUserId(userId);
      }
    });
    this.getPlantersByUserId(userId);
  }

  getPlantersByUserId(userId: any) {
    this.planterService.getPlantersByUserId(userId).subscribe(
      (planters) => {
        this.userPlanter = planters;
      },
      (error) => console.log(error)
    );
  }

  trackByPlantId(index: number, planter: Planter) {
    return planter.plantId;
  }
}
