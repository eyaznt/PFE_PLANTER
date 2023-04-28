import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';
import { UserService } from './../user.service';
import { User } from '../user';
import 'zone.js/dist/long-stack-trace-zone';
import { PlanterService } from '../planter.service';
import { Planter } from '../planter';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html', 
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  plants: Plant[] = [];
  selectedPlantId: string = '';
  email: string = '';
  username: string = '';
  userPlanter: Planter[] = [];
  userId: string = '';

  constructor(
    private plantService: PlantService,
    private userService: UserService,
    private planterService: PlanterService,
  ) {
    this.currentUser = new User('', '', '', 0);
    this.userId = '';
  }

  ngOnInit() {
    this.getPlants();
    const currentUserEmail = sessionStorage.getItem('currentUserEmail');
    if (currentUserEmail) {
      this.userService.getUserByEmail(currentUserEmail).subscribe(
        (response) => {
          this.currentUser = response;
          this.email = this.currentUser.email; // Set this.email to the user's email address
          this.username = response.username;
  
          // Retrieve the planter associated with the logged-in user
          this.planterService.getPlantersByUserId(this.currentUser.userId).subscribe(
            (planters: Planter[]) => {
              this.userPlanter = [...planters];
            },
            (error) => console.log(error)
          );
        },
        (error) => console.log(error)
      );
    }
  }
  
  getPlants() {
    this.plantService.getAllPlants().subscribe(
      (plants: Plant[]) => {
        this.plants = plants;
        console.log(this.plants); 
      },
      (error) => console.log(error)
    );
  }
  
  addPlant() {
    const selectedPlant = this.plants.find(plant => plant.plantId === this.selectedPlantId);
    if (selectedPlant) {
      if (!this.currentUser.plants) {
        this.currentUser.plants = [];
      }
      if (!this.currentUser.plants.includes(selectedPlant)) {
        this.currentUser.plants.push(selectedPlant);
        this.userService.updateUser(this.email, this.currentUser).subscribe(
          (response) => {
            alert('User updated successfully');
            // Create a new planter with the selected plant's plantId
            const newPlanter: Planter = {
              userId: this.currentUser.userId,
              plantId: selectedPlant.plantId,
              plantName: selectedPlant.plantName,
              sensorDataList: []
            };
            this.planterService.savePlanter(newPlanter).subscribe(
              (response) => {
                alert('Planter created successfully');
                // Refresh the user's planters
                this.planterService.getPlantersByUserId(this.currentUser.userId).subscribe(
                  (planters: Planter[]) => {
                    this.userPlanter = [...planters];
                  },
                  (error) => console.log(error)
                );
              },
              (error) => {
                console.error(error);
                alert('Error creating planter');
              }
            );
          },
          (error) => {
            console.error(error);
            alert('Error updating user');
          }
        );
      }
    }
  }
  }

  //  addPlant() {
  //   const selectedPlant = this.plants.find(plant => plant.plantId === this.selectedPlantId);
  //   if (selectedPlant) {
  //     if (!this.currentUser.plants) {
  //       this.currentUser.plants = [];
  //     }
  //     if (!this.currentUser.plants.includes(selectedPlant)) {
  //       this.currentUser.plants.push(selectedPlant);
  //       this.userService.updateUser(this.email, this.currentUser).subscribe(
  //         (response) => {
  //           alert('User updated successfully') ;
  //         },
  //         (error) => {
  //           console.error(error);
  //           alert('Error updating user');
  //         }
  //       );
  //     }
  //   }
  // }
  







