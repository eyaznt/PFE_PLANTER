package com.Whitecape.PFE.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Whitecape.PFE.models.Planter;
import com.Whitecape.PFE.repositories.PlanterRepository;

@RestController
@RequestMapping("/planters")
@CrossOrigin(origins = "http://localhost:4200")
public class PlanterController {

    @Autowired
    private PlanterRepository planterRepository;

    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:4200")

    public ResponseEntity<Planter> savePlanter(@RequestBody Planter planter) {
        Planter savedPlanter = planterRepository.save(planter);
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
