package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Dealer {
    @Id
    Long id;
    String href;
    String phone;
}
