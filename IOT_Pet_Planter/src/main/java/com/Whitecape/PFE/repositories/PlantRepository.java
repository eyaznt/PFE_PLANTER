package com.Whitecape.PFE.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Whitecape.PFE.models.Plant;

public interface PlantRepository extends MongoRepository<Plant , String> {
	Plant findByName(String name);
}
