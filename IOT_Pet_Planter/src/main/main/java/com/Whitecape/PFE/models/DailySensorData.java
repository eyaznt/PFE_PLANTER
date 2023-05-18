package com.Whitecape.PFE.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class DailySensorData {
    private Map<String, List<SensorData>> sensorDataByDate;

    // Getters and setters
    // ...

    public Map<String, List<SensorData>> getSensorDataByDate() {
        return sensorDataByDate;
    }

    public void setSensorDataByDate(Map<String, List<SensorData>> sensorDataByDate) {
        this.sensorDataByDate = sensorDataByDate;
    }

    public void addSensorData(String date, SensorData sensorData) {
        sensorDataByDate.computeIfAbsent(date, k -> new ArrayList<>()).add(sensorData);
    }
}

