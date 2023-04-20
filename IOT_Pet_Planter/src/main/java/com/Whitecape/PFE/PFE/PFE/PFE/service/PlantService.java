package com.Whitecape.PFE.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Whitecape.PFE.models.Plant;
import com.Whitecape.PFE.repositories.PlantRepository;

@Service
public class PlantService {

    @Autowired
    private PlantRepository plantRepository;

    public List<Plant> getAllPlants() {
        return plantRepository.findAll();
    }

    public Optional<Plant> getPlantById(String plantId) {
        return plantRepository.findById(plantId);
    }

    public Plant savePlant(Plant plant) {
        return plantRepository.save(plant);
    }

    public void deletePlant(String plantId) {
        plantRepository.deleteById(plantId);
    }
}
