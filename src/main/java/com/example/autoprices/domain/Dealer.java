package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.net.URL;

@Data
@Entity
public class Dealer implements Serializable {

    @Id
    Long id;
    String link;
    URL logo;
    String type;
    @Column(unique=true)
    String name;
    Integer packageId;
    Integer typeId;

}
