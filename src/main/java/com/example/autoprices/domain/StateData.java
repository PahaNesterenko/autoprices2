package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
public class StateData implements Serializable {

    @Id
    Long cityId;
    Long stateId;
    String name;
    String regionName;
    String regionNameEng;
    String linkToCatalog;
    String title;

}
