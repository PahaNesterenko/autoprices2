package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.*;
import java.time.Year;
import java.util.Date;

@Data
@Entity
public class Auto {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;
    String make;
    String model;
    Advert advert;
    Year year;
    Long price;
    Long mileage;
    FuelType fuelType;
    String location;
    Transmission transmission;
    Double engineCapacity;
    Boolean customRegistered = true;
    Boolean accidentFree = true;
    Boolean locatedInUkraine = true;

     Date created;
     Date updated;

    @PrePersist
    protected void onCreate() {
        created = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        updated = new Date();
    }

}
