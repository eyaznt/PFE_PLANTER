package com.Whitecape.PFE.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Whitecape.PFE.models.Plant;
import com.Whitecape.PFE.repositories.PlantRepository;

@RestController
@RequestMapping("/api/plants")
@CrossOrigin(origins = "http://localhost:4200")

public class PlantController {

    @Autowired
    private PlantRepository plantRepository;

    // This method maps to GET requests to /api/plants
    @GetMapping
    public ResponseEntity<List<Plant>> getAllPlants() {
        
        // Get all plants from the plantRepository
        List<Plant> plants = plantRepository.findAll();
        
        // Return a ResponseEntity with the list of plants and the HTTP status code 200 (OK)
        return new ResponseEntity<List<Plant>>(plants, HttpStatus.OK);
    }
    
    // This method maps to GET requests to /api/plants/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Plant> getPlantById(@PathVariable("id") String id) {
        
        // Find the plant with the given id from the plantRepository
        Optional<Plant> plant = plantRepository.findById(id);
        
        // If the plant is found, return a ResponseEntity with the plant and the HTTP status code 200 (OK)
        if (plant.isPresent()) {
            return new ResponseEntity<Plant>(plant.get(), HttpStatus.OK);
        }
        // If the plant is not found, return a ResponseEntity with the HTTP status code 404 (Not Found)
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    // This method maps to POST requests to /api/plants
    @PostMapping
    public ResponseEntity<Plant> createPlant(@RequestBody Plant plant) {
        
        // Save the new plant to the plantRepository
        Plant savedPlant = plantRepository.save(plant);
        
        // Return a ResponseEntity with the saved plant and the HTTP status code 201 (Created)
        return new ResponseEntity<Plant>(savedPlant, HttpStatus.CREATED);
    }
    
    // This method maps to PUT requests to /api/plants/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Plant> updatePlant(@PathVariable("id") String id, @RequestBody Plant plant) {
        
        // Find the plant with the given id from the plantRepository
        Optional<Plant> plantData = plantRepository.findById(id);
        
        // If the plant is found, update its attributes and save it to the plantRepository
        if (plantData.isPresent()) {
            Plant updatedPlant = plantData.get();
            updatedPlant.setName(plant.getName());
            updatedPlant.setType(plant.getType());
            updatedPlant.setDescription(plant.getDescription());
            plantRepository.save(updatedPlant);
            // Return a ResponseEntity with the updated plant and the HTTP status code 200 (OK)
            return new ResponseEntity<Plant>(updatedPlant, HttpStatus.OK);
        }
        // If the plant is not found, return a ResponseEntity with the HTTP status code 404 (Not Found)
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    // This method maps to DELETE requests to /api/plants/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePlant(@PathVariable("id") String id) {
        
        try {
            // Delete the plant with the given id from the plantRepository
            plantRepository.deleteById(id);
            // Return a ResponseEntity with the HTTP status code 204 (No Content)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            // If there's an exception while deleting the plant, return a ResponseEntity with the HTTP status code 500 (Internal Server Error)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
