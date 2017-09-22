package com.example.autoprices.domain;

import com.example.autoprices.domain.deserializer.EngineDeserializer;
import com.example.autoprices.domain.deserializer.TransmissionDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.Year;

@Data
@Entity
public class AutoData {

    @Id
    Long autoId;
    String description;
    String version;
    Boolean onModeration;
    Year year;
    Integer statusId;
    Boolean withVideo;
    String race;
    Integer raceInt;
    @JsonDeserialize(using = EngineDeserializer.class)
    Engine fuelName;
    @JsonDeserialize(using = TransmissionDeserializer.class)
    Transmission gearboxName;
    Boolean isSold;
    String mainCurrency;
    Boolean fromArchive;
    Integer categoryId;
    Integer custom;
}
