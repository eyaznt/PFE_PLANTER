import { AdmindashboardComponent } from './../admindashboard.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AuthService } from 'src/app/auth/auth.service';
import { PlantService } from 'src/app/plant.service';
import { PlantModalComponent } from './plant-modal/plant-modal.component';

@Component({
  selector: 'app-plants-controll',
  templateUrl: './plants-controll.component.html',
  styleUrls: ['./plants-controll.component.css']
})
export class PlantsControllComponent {
  currentPlant: any;
  plants: any;
  showPlantInfo = false;
  constructor(private plantService: PlantService, private dialog: MatDialog ,private authGuard: AuthGuard,
    private authService: AuthService,) { }
  ngOnInit(): void {
    this.plantService.getAllPlants().subscribe(data => {
      this.plants = data;
    });
  }
  viewPlant(plantId: string) {
    this.plantService.getPlantById(plantId).subscribe(data => {
      this.currentPlant = data;
      const dialogRef = this.dialog.open(PlantModalComponent, { data: this.currentPlant });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }
}
