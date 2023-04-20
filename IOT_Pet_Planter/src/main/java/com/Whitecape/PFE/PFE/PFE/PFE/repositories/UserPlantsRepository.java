package com.Whitecape.PFE.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Whitecape.PFE.models.UserPlants;

public interface UserPlantsRepository extends MongoRepository<UserPlants, String> {
    UserPlants findByUserId(String userId);
}