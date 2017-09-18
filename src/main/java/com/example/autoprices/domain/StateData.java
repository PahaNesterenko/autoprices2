package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class StateData {

    @Id
    Long stateId;
    Long cityId;
    String name;
    String regionName;
    String linkToCatalog;
    String title;

}
