package com.Whitecape.PFE.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Plant")
public class Plant {
	@Id
	private String plantId;
    private String plantName;
    private String type;
    private String description;
   
    public Plant() {
    
    }
    
	public Plant( String plantId ,String plantName, String type, String description) {
		this.plantId = plantId;
		this.plantName = plantName;
		this.type = type;
		this.description = description;
	}

	public String getplantId() {
		return plantId;
	}

	public void setplantId(String plantId) {
		this.plantId = plantId;
	}
	

	public String getplantName() {
		return plantName;
	}

	public void setplantName(String plantName) {
		this.plantName = plantName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
    
    
}
