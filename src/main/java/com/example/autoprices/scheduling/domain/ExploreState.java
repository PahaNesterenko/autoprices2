package com.example.autoprices.scheduling.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Data
public class ExploreState implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    Long pageNumber;
    LocalDateTime created;

    @PrePersist
    void createdAt() {
        this.created = LocalDateTime.now();
    }

}
