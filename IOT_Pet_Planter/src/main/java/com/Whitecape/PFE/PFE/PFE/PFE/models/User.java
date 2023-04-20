package com.Whitecape.PFE.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="User")
public class User {
	@Id
	private String userId;
	private String username;
    private String email;
    private String password;
    private int phone ;   
    private List <Plant> plants ;
    private List<Planter> planters;

   
   
public User() {
	planters = new ArrayList<>();	
	plants= new ArrayList<>();
    }

    
public User(String username, String email, int phone,  String password, List<Plant> plants) {
	this.username = username;
	this.email = email;
	this.password = password;
	this.phone=phone;    
	this.plants = plants;


	}

public String getId() {
	return userId;
}

public void setId(String userId) {
	this.userId = userId;
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


public int getPhone() {
	return phone;
}


public void setPhone(int phone) {
	this.phone = phone;
}


public List<Plant> getPlants() {
	return plants;
}


public void setPlants(List<Plant> plants) {
	this.plants = plants;
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
@Override
public String toString() {
	return "User [id=" + userId + ", username=" + username + ", email=" + email + ", phone=" + phone + ", plants=" + plants + "]";
}

}
