package com.Whitecape.PFE.Controller;

import java.io.IOException;
import java.util.List;

import com.Whitecape.PFE.models.SensorData;
import com.Whitecape.PFE.service.PlanterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.ModelAttribute;
import com.Whitecape.PFE.models.Planter;
import com.Whitecape.PFE.repositories.PlanterRepository;
import org.springframework.http.MediaType;

@RestController
@RequestMapping("/planters")
public class PlanterController {

    @Autowired
    private PlanterRepository planterRepository;
    @Autowired
    private PlanterService planterService;
    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Planter> savePlanter(@ModelAttribute Planter planter, @RequestParam("image") MultipartFile image) {
        if (!image.isEmpty()) {
            try {
                byte[] imageBytes = image.getBytes();
                planter.setImageUrl(imageBytes);
            } catch (IOException e) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        // Retrieve the logged-in user's ID using your existing method
        String userId = planter.getUserId();

        // Retrieve the selected plant's information using your existing methods
        String plantId = planter.getPlantId();
        String plantName = planter.getPlantName();

        // Set the retrieved values in the planter object
        planter.setUserId(userId);
        planter.setPlantId(plantId);
        planter.setPlantName(plantName);

        // Retrieve the list of sensors from the planter object
        List<SensorData> sensors = planter.getSensorDataList();

        // Save the planter in the database
        Planter savedPlanter = planterService.savePlanter(planter);

        // Update the planter with the list of sensors
        savedPlanter.setSensorDataList(sensors);
        savedPlanter = planterService.savePlanter(savedPlanter);

        return new ResponseEntity<>(savedPlanter, HttpStatus.CREATED);
    }


    
    @GetMapping("/{userId}")
    @CrossOrigin(origins = "http://localhost:4200")

    public ResponseEntity<List<Planter>> getPlantersByUserId(@PathVariable String userId) {
        List<Planter> planters = planterRepository.findByUserId(userId);
        return new ResponseEntity<>(planters, HttpStatus.OK);
    }



    @DeleteMapping("/deletePlanter/{planterId}")
    @CrossOrigin(origins = "http://localhost:4200")

    public ResponseEntity<String> deletePlanter(@PathVariable String planterId) {
        planterRepository.deleteById(planterId);
        return new ResponseEntity<>("Planter deleted successfully", HttpStatus.OK);
    }
}
