package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Engine {

    @Id
    Long id;
    FuelType fuelType;
    Double volume;

}
