package com.Whitecape.PFE.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Whitecape.PFE.models.Plant;

public interface PlantRepository extends MongoRepository<Plant , String> {
	Plant findByplantName(String plantName);
	Plant findByType(String type);
	Optional<Plant> findById(String plantId);
}
