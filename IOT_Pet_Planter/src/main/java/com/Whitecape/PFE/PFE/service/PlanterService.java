package com.Whitecape.PFE.service;

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
}
