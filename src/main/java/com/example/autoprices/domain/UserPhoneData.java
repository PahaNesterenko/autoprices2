package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class UserPhoneData {

    @Id
    Long phoneId;
    String phone;

}
