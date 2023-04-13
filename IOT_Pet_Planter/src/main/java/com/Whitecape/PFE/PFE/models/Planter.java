package com.Whitecape.PFE.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Planter")
public class Planter {
	@Id
	private String id;
	private String name;
    @DBRef
    private User user;
    
public Planter() {
	
}
public Planter(String name, User user) {
		
	this.user = user;
	this.name=name;
	}

public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}



public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public User getUser() {
	return user;
}

public void setUser(User user) {
	this.user = user;
}
    
    
	

}
