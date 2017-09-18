package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.net.URL;

@Data
@Entity
public class Dealer {

    @Id
    Long id;
    String link;
    URL logo;
    String type;
    String name;
    Integer packageId;
    Integer typeId;

}
