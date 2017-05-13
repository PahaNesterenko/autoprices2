package com.example.autoprices;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.example.autoprices.domain.Auto;
import com.example.autoprices.domain.FuelType;
import com.example.autoprices.domain.Transmission;
import com.example.autoprices.persistance.AutoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {

    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);

    @Autowired
    private AutoRepository autoRepository;

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    @Scheduled(fixedRate = 5000)
    public void reportCurrentTime() {
        log.info("The time is now {}", dateFormat.format(new Date()));
        Auto auto = new Auto();
        auto.setMake("make");
        auto.setModel("model");
        auto.setTransmission(Transmission.MANUAL);
        auto.setFuelType(FuelType.DIESEL);
        autoRepository.save(auto);
    }
}
