package com.Whitecape.PFE.repositories;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.Whitecape.PFE.models.Planter;

public interface PlanterRepository extends MongoRepository<Planter, String> {
    List<Planter> findByUserId(String userId);
    Planter findByPlanterId(String planterId);
    void deleteById(String planterId);
}
