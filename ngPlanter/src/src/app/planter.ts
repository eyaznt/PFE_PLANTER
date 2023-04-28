import { Plant } from "./plant";

export class Planter {
    userId: string;
    plantId: string;
    plantName: string;
    sensorDataList: SensorData[];
    
  
    constructor(userId: string, plantId: string, plantName: string, sensorDataList: SensorData[]) {
      this.userId = userId;
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

