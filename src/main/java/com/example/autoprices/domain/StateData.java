package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class StateData implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Column(unique = true)
    Long cityId;
    Long stateId;
    String name;
    String regionName;
    String regionNameEng;
    String linkToCatalog;
    String title;

}
