package com.Whitecape.PFE.config;

import com.Whitecape.PFE.models.DailySensorData;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SensorDataConfig {
    @Bean
    public DailySensorData dailySensorData() {
        return new DailySensorData();
    }
}