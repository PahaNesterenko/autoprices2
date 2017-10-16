package com.example.autoprices.domain;

public enum FuelType {

    PETROL("Petrol"),
    DIESEL("Diesel"),
    GASPETROL("Gas/Petrol"),
    ELECTRIC("Electric");

    String name;

    FuelType( String name){
        this.name = name;
    }

}
