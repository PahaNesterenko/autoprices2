package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class CheckedVin {

    @Id
    String vin;
    Boolean isShow;
    String linkToReport;
    Boolean hasRestrictions;
    String checkDate;
    Boolean isChecked;

}
