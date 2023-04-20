export class Plant {
    plantId: string;
    plantName: string;
    type: string;
    description: string;
  
    constructor(plantId: string, plantName: string, type: string, description: string) {
      this.plantId = plantId;
      this.plantName = plantName;
      this.type = type;
      this.description = description;
    }
  }
  
