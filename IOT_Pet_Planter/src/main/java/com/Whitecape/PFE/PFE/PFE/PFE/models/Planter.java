package com.Whitecape.PFE.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Planter")
public class Planter {
    @Id
    private String planterId;
    private String userId;
    private String plantId;
    private String plantName;
    private List<SensorData> sensorDataList;
    
    public Planter(String userId,String plantName, String plantId, List<SensorData> sensorDataList) {
        this.userId = userId;
        this.plantName = plantName;
        this.plantId = plantId;
        this.sensorDataList = sensorDataList;
    }

	public String getplanterId() {
		return planterId;
	}

	public void setplanterId(String planterId) {
		this.planterId = planterId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPlantId() {
		return plantId;
	}

	public void setPlantId(String plantId) {
		this.plantId = plantId;
	}

	public List<SensorData> getSensorDataList() {
		return sensorDataList;
	}

	public void setSensorDataList(List<SensorData> sensorDataList) {
		this.sensorDataList = sensorDataList;
	}

	public String getName() {
		return plantName;
	}

	public void setName(String plantName) {
		this.plantName = plantName;
	}
}

class SensorData {
    private String sensorName;
    private double sensorValue;
    
    public SensorData(String sensorName, double sensorValue) {
        this.sensorName = sensorName;
        this.sensorValue = sensorValue;
    }

	public String getSensorName() {
		return sensorName;
	}

	public void setSensorName(String sensorName) {
		this.sensorName = sensorName;
	}

	public double getSensorValue() {
		return sensorValue;
	}

	public void setSensorValue(double sensorValue) {
		this.sensorValue = sensorValue;
	}
    
}
