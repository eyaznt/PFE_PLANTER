import { Plant } from "./plant";

export class Planter {
    userId: string;
    plantId: string;
    plantName: string;
    imageUrl: File;
    sensorDataList: SensorData[];
    
  
    constructor(userId: string, plantId: string, plantName: string, sensorDataList: SensorData[],  imageUrl: File
      ) {
      this.userId = userId;
      this.imageUrl=imageUrl;
      this.plantId = plantId;
      this.plantName = plantName;
      this.sensorDataList = sensorDataList;
    }
}

export class SensorData {
    sensorName: string;
    sensorValue: number;
  
    constructor(sensorName: string, sensorValue: number) {
      this.sensorName = sensorName;
      this.sensorValue = sensorValue;
    }
}

