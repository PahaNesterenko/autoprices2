package com.example.autoprices.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Advert {

    @Id
    Long id;
    Long userId;
    Integer chipsCount;
    String locationCityName;
    Boolean auctionPossible;
    Boolean exchangePossible;
    Boolean realtyExchange;
    String exchangeType;
    Integer exchangeTypeId;
    String addDate;
    String updateDate;
    String expireDate;
    Boolean userHideADSStatus;
    UserPhoneData userPhoneData;
    Long USD;
    Long UAH;
    Long EUR;
    Boolean isAutoAddedByPartner;
    Long partnerId;
    LevelData levelData;
    AutoData autoData;
    String markName;
    Long markId;
    String modelName;
    Long modelId;
    PhotoData photoData;
    String linkToView;
    String title;
    StateData stateData;
    OldTop oldTop;
    Boolean canSetSpecificPhoneToAdvert;
    Integer dontComment;
    Integer sendComments;
    CheckedVin checkedVin;
    Integer isLeasing;
    Dealer dealer;
    Boolean withInfoBar;
    String infoBarText;
}