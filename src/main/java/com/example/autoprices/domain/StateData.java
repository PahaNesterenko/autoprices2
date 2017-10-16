package com.example.autoprices.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
@JsonIgnoreProperties("regionNameEng")
public class StateData implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long stateId;
    Long cityId;
    String name;
    String regionName;
    String linkToCatalog;
    String title;

}
