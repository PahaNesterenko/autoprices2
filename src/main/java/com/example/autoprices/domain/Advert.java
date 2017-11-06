package com.example.autoprices.domain;

import com.example.autoprices.domain.deserializer.CustomCurrencyDeserializer;
import com.example.autoprices.domain.deserializer.CustomLocalDateTimeDeserializer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Entity
@JsonIgnoreProperties({"badges","markNameEng","modelNameEng","optionStyles"})
public class Advert implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long localId;
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
    @OneToOne(cascade = CascadeType.MERGE)
    UserPhoneData userPhoneData;
    @JsonDeserialize(using = CustomCurrencyDeserializer.class)
    Long USD;
    @JsonDeserialize(using = CustomCurrencyDeserializer.class)
    Long UAH;
    @JsonDeserialize(using = CustomCurrencyDeserializer.class)
    Long EUR;
    Boolean isAutoAddedByPartner;
    Long partnerId;
    @OneToOne(cascade = CascadeType.ALL)
    LevelData levelData;
    @OneToOne(cascade = CascadeType.ALL)
    AutoData autoData;
    String markName;
    Long markId;
    String modelName;
    Long modelId;
    @OneToOne(cascade = CascadeType.ALL)
    PhotoData photoData;
    String linkToView;
    String title;
    @OneToOne(cascade = CascadeType.MERGE)
    StateData stateData;
    @OneToOne(cascade = CascadeType.ALL)
    //@JsonDeserialize(using = OldTopDeserializer.class)
    OldTop oldTop;
    Boolean canSetSpecificPhoneToAdvert;
    Integer dontComment;
    Integer sendComments;
    @OneToOne(cascade = CascadeType.ALL)
    //@JsonDeserialize(using = CheckedVinDeserializer.class)
    CheckedVin checkedVin;
    Integer isLeasing;
    @OneToOne(cascade = CascadeType.MERGE)
    Dealer dealer;
    Boolean withInfoBar;
    String infoBarText;
}