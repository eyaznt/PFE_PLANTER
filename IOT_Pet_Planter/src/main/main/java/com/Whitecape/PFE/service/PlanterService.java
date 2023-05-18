package com.Whitecape.PFE.service;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Whitecape.PFE.models.Planter;
import com.Whitecape.PFE.repositories.PlanterRepository;

@Service
public class PlanterService {

    @Autowired
    private PlanterRepository planterRepository;

    public Planter savePlanter(Planter planter) {
        return planterRepository.save(planter);
    }

    public List<Planter> getPlantersByUserId(String userId) {
        return planterRepository.findByUserId(userId);
    }

    public void deletePlanterById(String planterId) {
        planterRepository.deleteById(planterId);
    }

    public List<Planter> getAllPlanters() {
        return planterRepository.findAll();
    }

    public Planter getPlanterById(String planterId) {
        return planterRepository.findById(planterId).orElse(null);
    }

    public String getPlanterImage(String planterId) {
        // Retrieve the planter from the database based on the planterId
        Planter planter = planterRepository.findByPlanterId(planterId).orElse(null);

        if (planter != null && planter.getImageUrl() != null) {
            // Convert the image URL or byte[] to a base64-encoded string
            return Base64.getEncoder().encodeToString(planter.getImageUrl());
        }

        return null; // Return null or handle the case when the image is not found
    }
}
