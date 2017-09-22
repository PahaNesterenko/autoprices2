package com.example.autoprices.domain;

import com.example.autoprices.domain.deserializer.CustomLocalDateTimeDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Data
@Entity
public class LevelData {

    @Id
    Long id;

    Long level;
    Integer label;
    String hotType;
    @JsonDeserialize(using = CustomLocalDateTimeDeserializer.class)
    LocalDateTime expireDate;

}
