package com.Whitecape.PFE.Controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Whitecape.PFE.models.Plant;
import com.Whitecape.PFE.repositories.PlantRepository;

@RestController
@RequestMapping("/api/plants")
public class PlantController {

    @Autowired
    private PlantRepository plantRepository;

    @GetMapping
    public List<String> getAllPlantNames() {
        List<Plant> plants = plantRepository.findAll();
        List<String> plantNames = new ArrayList<>();
        for (Plant plant : plants) {
            plantNames.add(plant.getName());
        }
        return plantNames;
    }
}
