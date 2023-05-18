package com.Whitecape.PFE.Controller;

import com.Whitecape.PFE.models.DailySensorData;
import com.Whitecape.PFE.models.SensorData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sensor-data")
public class SensorDataController {
    private DailySensorData dailySensorData;

    @Autowired
    public SensorDataController(DailySensorData dailySensorData) {
        this.dailySensorData = dailySensorData;
    }

    @PostMapping("/{date}")
    public ResponseEntity<String> addSensorData(@PathVariable String date, @RequestBody SensorData sensorData) {
        dailySensorData.addSensorData(date, sensorData);
        return ResponseEntity.ok("Sensor data added successfully.");
    }

    @GetMapping("/{date}")
    public ResponseEntity<List<SensorData>> getSensorDataByDate(@PathVariable String date) {
        List<SensorData> sensorData = dailySensorData.getSensorDataByDate().get(date);
        if (sensorData == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(sensorData);
    }
}