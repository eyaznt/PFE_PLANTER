import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plant } from 'src/app/plant';
import { PlantService } from 'src/app/plant.service';
import { Planter, SensorData } from 'src/app/planter';
import { PlanterService } from 'src/app/planter.service';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-top-widget',
  templateUrl: './top-widget.component.html',
  styleUrls: ['./top-widget.component.css']
})
export class TopWidgetComponent implements OnInit {
  currentUser: User;
  plants: Plant[] = [];
  selectedPlantId: string = '';
  email: string = '';
  username: string = '';
  userPlanter: Planter[] = [];
  userId: string = '';
  selectedFile: File | null = null;
  showForm: boolean = false;
  isUserInfoLoaded: boolean = false;
  sensorDataList: SensorData[] = []; // Add sensorDataList property
  sensorName: string = ''; // Add sensorName property
  sensorValue: number = 0; // Add sensorValue property

  constructor(
    private plantService: PlantService,
    private userService: UserService,
    private planterService: PlanterService,
    private cdr: ChangeDetectorRef
  ) {
    this.currentUser = new User('', '', '', 0);
    this.userId = '';
    this.selectedFile = null; 
  }

  ngOnInit() {
    this.getPlants();
    const currentUserEmail = sessionStorage.getItem('currentUserEmail');
    if (currentUserEmail) {
      this.userService.getUserByEmail(currentUserEmail).subscribe(
        (response) => {
          console.log('Retrieved User:', response); // Add this line to check the response
    
          this.currentUser = response;
          this.email = this.currentUser.email;
          this.username = response.username;
          this.userId = response.userId; // Update the property to response.userId
          this.getPlantersByUserId(this.userId);
          this.isUserInfoLoaded = true;
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
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addSensorData() {
    const sensorData: SensorData = {
      sensorName: this.sensorName,
      sensorValue: this.sensorValue
    };
      console.log('Adding sensor data:', sensorData);

    this.sensorDataList.push(sensorData);

    // Reset sensorName and sensorValue
    this.sensorName = '';
    this.sensorValue = 0;
  }

  removeSensorData(index: number) {
    this.sensorDataList.splice(index, 1);
  }

  submitForm(form: NgForm) {
    const selectedPlant = this.plants.find((plant) => plant.plantId === this.selectedPlantId);
  
    if (selectedPlant && this.selectedFile && this.isUserInfoLoaded) {
      const newPlanter = new Planter(
        this.userId, // Add this line
        selectedPlant.plantId,
        selectedPlant.plantName,
        this.sensorDataList,
        this.selectedFile
        
      );  
          console.log('New planter:', newPlanter);

      const formData = new FormData();
      formData.append('userId', newPlanter.userId);
      formData.append('plantId', newPlanter.plantId);
      formData.append('plantName', newPlanter.plantName);
      formData.append('image', this.selectedFile);
    
      for (let i = 0; i < this.sensorDataList.length; i++) {
        formData.append('sensorDataList[' + i + '].sensorName', this.sensorDataList[i].sensorName);
        formData.append('sensorDataList[' + i + '].sensorValue', this.sensorDataList[i].sensorValue.toString());
      }
    
      this.planterService.savePlanter(formData).subscribe(
        () => {
          alert('Plant added successfully!');
          form.resetForm();
          this.showForm = false;
          console.log('Current User ID:', this.currentUser.userId);
          // this.getPlantersByUserId(this.currentUser.userId);
          this.planterService.setReload(true);
        },
        (error) => console.log(error)
      );
    }  
  }
  getPlantersByUserId(userId: string) {
    console.log('Received User ID:', userId);
    this.planterService.getPlantersByUserId(userId).subscribe(
      (planters) => {
        this.userPlanter = planters;
        },
        (error) => console.log(error));
  }

  }       

  // submitForm(form: NgForm) {
  //   if (form.valid && this.selectedPlantId && this.fileToUpload) {
  //     const selectedPlant = this.plants.find(plant => plant.plantId === this.selectedPlantId);
  //     if (selectedPlant) {
  //       this.userService.getUserByEmail(this.email).subscribe(
  //         (response) => {
  //           this.currentUser = response;
  //           if (!this.currentUser.plants) {
  //             this.currentUser.plants = [];
  //           }
  //           if (!this.currentUser.plants.includes(selectedPlant)) {
  //             const formData = new FormData();
  //             if (this.fileToUpload) {
  //               formData.append('imageUrl', this.fileToUpload);
  //             }
  //             if (this.fileToUpload) {
  //               this.planterService.uploadImage(this.fileToUpload).subscribe(        
  //                 (imageUrl: string) => {
  //                   // Create a new planter with the selected plant's plantId and the uploaded imageURL
  //                   const newPlanter: Planter = {
  //                     userId: this.currentUser.userId,
  //                     plantId: selectedPlant.plantId,
  //                     plantName: selectedPlant.plantName,
  //                     imageUrl: imageUrl,
  //                     sensorDataList: []
  //                   };
  //                   this.planterService.savePlanter(newPlanter).subscribe(
  //                     (response) => {
  //                       alert('Planter created successfully');
  //                       // Refresh the user's planters
  //                       this.planterService.getPlantersByUserId(this.currentUser.userId).subscribe(
  //                         (planters: Planter[]) => {
  //                           this.userPlanter = [...planters];
  //                         },
  //                         (error) => console.log(error)
  //                       );
  //                     },
  //                     (error) => {
  //                       console.error(error);
  //                       alert('Error creating planter');
  //                     }
  //                   );
  //                 },
  //                 (error) => {
  //                   console.error(error);
  //                   alert('Error uploading image');
  //                 }
  //               );
  //             }
  //           } else {
  //             alert('You already have this plant in your collection');
  //           }
  //         },
  //         (error) => {
  //           console.error(error);
  //           alert('Error retrieving user');
  //         }
  //       );
  //     }
  //   } else {
  //     alert('Please fill out all required fields');
  //   }
  // }
     // }
  

    

