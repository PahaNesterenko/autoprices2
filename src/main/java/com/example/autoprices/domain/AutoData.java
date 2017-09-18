package com.example.autoprices.domain;

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
    String fuelName;
    String gearboxName;
    Boolean isSold;
    String mainCurrency;
    Boolean fromArchive;
    Integer categoryId;
    Integer custom;
}
