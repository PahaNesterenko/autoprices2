package com.example.autoprices.domain;

import com.example.autoprices.domain.deserializer.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Data
@Entity
@JsonIgnoreProperties({"badges","markNameEng","modelNameEng","optionStyles"})
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
    @JsonDeserialize(using = CustomLocalDateTimeDeserializer.class)
    LocalDateTime addDate;
    @JsonDeserialize(using = CustomLocalDateTimeDeserializer.class)
    LocalDateTime updateDate;
    @JsonDeserialize(using = CustomLocalDateTimeDeserializer.class)
    LocalDateTime expireDate;
    Boolean userHideADSStatus;
    UserPhoneData userPhoneData;
    @JsonDeserialize(using = CustomCurrencyDeserializer.class)
    Long USD;
    @JsonDeserialize(using = CustomCurrencyDeserializer.class)
    Long UAH;
    @JsonDeserialize(using = CustomCurrencyDeserializer.class)
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
   // @JsonDeserialize(using = OldTopDeserializer.class)
    OldTop oldTop;
    Boolean canSetSpecificPhoneToAdvert;
    Integer dontComment;
    Integer sendComments;
   // @JsonDeserialize(using = CheckedVinDeserializer.class)
    CheckedVin checkedVin;
    Integer isLeasing;
    Dealer dealer;
    Boolean withInfoBar;
    String infoBarText;
}