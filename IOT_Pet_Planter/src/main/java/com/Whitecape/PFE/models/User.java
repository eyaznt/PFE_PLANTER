package com.Whitecape.PFE.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="User")
public class User {
	@Id
	private String id;
	private String username;
    private String email;
    private String password;
    private List<Planter> planters;
   
   
public User() {
	planters = new ArrayList<>();
    }

    
public User(String username, String email, String password) {
	this.username = username;
	this.email = email;
	this.password = password;
	}

public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public List<Planter> getPlanters() {
	return planters;
}

public void setPlanters(List<Planter> planters) {
	this.planters = planters;
}

}
