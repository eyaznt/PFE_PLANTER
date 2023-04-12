import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';
import { UserService } from './../user.service';
import { User } from '../user';
import { AuthGuard } from '../auth/auth.guard';
import 'zone.js/dist/long-stack-trace-zone';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  plants: Plant[] = [];
  selectedPlantId: string = '';
  userPlants: Plant[] = [];
  email: string = '';
  username: string = '';
  

  constructor(private plantService: PlantService, private userService: UserService, private authGuard: AuthGuard,private authService: AuthService) {
    this.currentUser = new User('', '', '', 0);
  }

  ngOnInit() {
    this.getPlants();
    const currentUserEmail = sessionStorage.getItem('currentUserEmail');
    if (currentUserEmail) {
      this.userService.getUserByEmail(currentUserEmail).subscribe(
        (user: User) => {
          this.currentUser = user;
          this.email = currentUserEmail;
          this.username = user.username;
          this.userPlants = user.plants || [];
        },
        (error) => console.log(error)
      );
    }
    // this.currentUser = this.userService.isCurrentUser();
    // this.email = this.currentUser.email;
    // this.username = this.currentUser.username;
    // this.userPlants = this.currentUser.plants || [];
  }

  getPlants() {
    this.plantService.getAllPlants().subscribe(
      (plants: Plant[]) => {
        this.plants = plants;
      },
      (error) => console.log(error)
    );
  }  addPlant() {
    const selectedPlant = this.plants.find(plant => plant.id === this.selectedPlantId);
    if (selectedPlant && !this.userPlants.includes(selectedPlant)) {
      this.userPlants.push(selectedPlant);
      this.currentUser.plants = this.userPlants;
      this.userService.updateUser(this.email, this.currentUser).subscribe(
        (response) => {
          // User updated successfully
        },
        (error) => {
          console.error(error);
          alert('Error updating user');
        }
      );
    }
  }
}






