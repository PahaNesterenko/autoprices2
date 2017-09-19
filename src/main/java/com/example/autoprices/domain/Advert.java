package com.example.autoprices.domain;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.Id;

import com.example.autoprices.domain.deserializer.CustomCurrencyDeserializer;
import com.example.autoprices.domain.deserializer.CustomLocalDateTimeDeserializer;
import com.example.autoprices.domain.serializer.CustomCurrencySerializer;
import com.example.autoprices.domain.serializer.CustomLocalDateTimeSerializer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import lombok.Data;

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
    @JsonSerialize(using = CustomLocalDateTimeSerializer.class)
    @JsonDeserialize(using = CustomLocalDateTimeDeserializer.class)
    LocalDateTime addDate;
    @JsonSerialize(using = CustomLocalDateTimeSerializer.class)
    @JsonDeserialize(using = CustomLocalDateTimeDeserializer.class)
    LocalDateTime updateDate;
    @JsonSerialize(using = CustomLocalDateTimeSerializer.class)
    @JsonDeserialize(using = CustomLocalDateTimeDeserializer.class)
    LocalDateTime expireDate;
    Boolean userHideADSStatus;
    UserPhoneData userPhoneData;
    @JsonSerialize(using = CustomCurrencySerializer.class)
    @JsonDeserialize(using = CustomCurrencyDeserializer.class)
    Long USD;
    @JsonSerialize(using = CustomCurrencySerializer.class)
    @JsonDeserialize(using = CustomCurrencyDeserializer.class)
    Long UAH;
    @JsonSerialize(using = CustomCurrencySerializer.class)
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