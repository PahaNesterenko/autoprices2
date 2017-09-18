package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
public class OldTop {

    @Id
    Long id;
    Boolean isActive;
    String expireDate;

}
