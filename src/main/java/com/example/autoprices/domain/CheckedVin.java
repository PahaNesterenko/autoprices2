package com.example.autoprices.domain;

import com.example.autoprices.domain.deserializer.CustomLocalDateTimeDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Entity
public class CheckedVin implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String vin;
    Boolean isShow;
    String linkToReport;
    Boolean hasRestrictions;
    @JsonDeserialize(using = CustomLocalDateTimeDeserializer.class)
    LocalDateTime checkDate;
    Boolean isChecked;

}
