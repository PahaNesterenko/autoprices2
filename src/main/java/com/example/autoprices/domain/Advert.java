package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
public class Advert {

    @Id
    Long id;
    Dealer dealer;
    Auto auto;
    Date created;
    Date updated;

}
