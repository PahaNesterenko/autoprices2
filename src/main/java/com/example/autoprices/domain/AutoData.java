package com.example.autoprices.domain;

import com.example.autoprices.domain.deserializer.EngineDeserializer;
import com.example.autoprices.domain.deserializer.TransmissionDeserializer;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Year;

@Data
@Entity
//@JsonIgnoreProperties({"fuelNameEng"})
public class AutoData implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long localId;
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
    @OneToOne(cascade= javax.persistence.CascadeType.ALL)
    Engine engine;
    String fuelNameEng;
    @JsonDeserialize(using = TransmissionDeserializer.class)
    Transmission gearbox;
    Boolean isSold;
    String mainCurrency;
    Boolean fromArchive;
    Integer categoryId;
    String categoryNameEng;
    String subCategoryNameEng;
    Integer custom;

    @JsonSetter("fuelName")
    public void setEngine(Engine engine){
        this.engine = engine;
    }
    @JsonSetter("gearboxName")
    public void setGearbox(Transmission gearbox) {
        this.gearbox = gearbox;
    }
}
