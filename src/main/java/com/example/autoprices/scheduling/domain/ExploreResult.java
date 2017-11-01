package com.example.autoprices.scheduling.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Data
public class ExploreResult implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    Long pageNumber;
    Long previousPageNumber;
    LocalDateTime created;
    Boolean random = false;
    Boolean successful = true;
    String errorReason;
    Integer advertCount;

    public ExploreResult(Long currentPage) {
        this.pageNumber = currentPage;
    }

    public ExploreResult() {
    }

    @PrePersist
    void createdAt() {
        this.created = LocalDateTime.now();
    }

}
