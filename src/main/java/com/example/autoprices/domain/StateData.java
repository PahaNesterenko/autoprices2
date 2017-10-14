package com.example.autoprices.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@JsonIgnoreProperties("regionNameEng")
public class StateData {

    @Id
    Long stateId;
    Long cityId;
    String name;
    String regionName;
    String linkToCatalog;
    String title;

}
