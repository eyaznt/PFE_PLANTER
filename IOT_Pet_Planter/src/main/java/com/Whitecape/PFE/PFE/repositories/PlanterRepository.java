package com.Whitecape.PFE.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Whitecape.PFE.models.Planter;
import com.Whitecape.PFE.models.User;
 //findByUser method takes a User object as an argument and returns a list of Planter objects that belong to that user.
public interface PlanterRepository extends MongoRepository<Planter,String>{
	List<Planter> findByUser(User user);
}
