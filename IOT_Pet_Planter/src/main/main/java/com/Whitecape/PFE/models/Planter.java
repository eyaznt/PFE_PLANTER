package com.Whitecape.PFE.models;

import java.util.List;
import java.util.Base64;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Planter")
public class Planter {
    @Id
    private String planterId;
    private String userId;
    private String plantId;
    private String plantName;
    private byte[] imageUrl;

	private List<SensorData> sensorDataList;
	public Planter() {
	}
    public byte[] getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(byte[] bytes) {
		this.imageUrl = bytes;
	}


    public Planter(String userId,String plantName, String plantId, List<SensorData> sensorDataList,byte[] imageUrl) {
        this.userId = userId;
        this.plantName = plantName;
        this.plantId = plantId;
        this.imageUrl=imageUrl;
        this.sensorDataList = sensorDataList;
    }

	public String getPlanterId() {
		return planterId;
	}

	public void setPlanterId(String planterId) {
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


	public void setPlantName(String plantName) {
		this.plantName = plantName;
	}
	public String getPlantName() {
		return plantName;
	}
	public String getImageUrlAsBase64() {
		if (imageUrl != null && imageUrl.length > 0) {
			return Base64.getEncoder().encodeToString(imageUrl);
		}
		return null;
	}
}

