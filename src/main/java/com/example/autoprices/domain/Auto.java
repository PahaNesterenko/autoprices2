package com.example.autoprices.domain;

import lombok.Data;

import java.time.Year;

@Data
public class Auto {

    String make;
    String model;
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


}
