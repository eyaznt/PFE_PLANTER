package com.Whitecape.PFE.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "UserPlants")
public class UserPlants {
    @Id
    private String id;

    private String userId;

    private List<String> plantId;

	public UserPlants(String id, String userId, List<String> plantId) {
		
		this.id = id;
		this.userId = userId;
		this.plantId = plantId;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public List<String> getPlantIds() {
		return plantId;
	}

	public void setPlantIds(List<String> plantIds) {
		this.plantId = plantIds;
	}
    

}
