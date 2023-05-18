import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-plant-modal',
  templateUrl: './plant-modal.component.html',
  styleUrls: ['./plant-modal.component.css']
})
export class PlantModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<PlantModalComponent>){
    
  }

}
