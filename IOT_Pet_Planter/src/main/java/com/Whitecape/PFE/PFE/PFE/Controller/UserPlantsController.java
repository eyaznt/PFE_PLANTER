package com.Whitecape.PFE.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Whitecape.PFE.models.UserPlants;
import com.Whitecape.PFE.repositories.UserPlantsRepository;

@RestController
@RequestMapping("/api")
public class UserPlantsController {
    
    @Autowired
    private UserPlantsRepository userPlantsRepository;

    @GetMapping("/userplants/{userId}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<List<String>> getUserPlants(@PathVariable("userId") String userId) {
        UserPlants userPlants = userPlantsRepository.findByUserId(userId);
        if(userPlants == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(userPlants.getPlantIds(), HttpStatus.OK);
    }
}