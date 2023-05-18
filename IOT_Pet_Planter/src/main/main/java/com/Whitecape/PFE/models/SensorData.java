package com.Whitecape.PFE.models;

public class SensorData {
    private String sensorName;
    private double sensorValue;

    public SensorData(String sensorName, double sensorValue) {
        this.sensorName = sensorName;
        this.sensorValue = sensorValue;
    }

    public String getSensorName() {
        return sensorName;
    }

    public void setSensorName(String sensorName) {
        this.sensorName = sensorName;
    }

    public double getSensorValue() {
        return sensorValue;
    }

    public void setSensorValue(double sensorValue) {
        this.sensorValue = sensorValue;
    }

}
