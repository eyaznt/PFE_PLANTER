package com.Whitecape.PFE.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.Whitecape.PFE.models.Planter;

public interface PlanterRepository extends MongoRepository<Planter, String> {
    List<Planter> findByUserId(String userId);
    Optional<Planter> findByPlanterId(String planterId);
    void deleteById(String planterId);
}
