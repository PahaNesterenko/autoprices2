package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
public class UserPhoneData implements Serializable {

    @Id
    Long phoneId;
    String phone;

}
