package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
public class LevelData {

    @Id
    Long id;

    Long level;
    Integer label;
    String hotType;
    String expireDate;

}
