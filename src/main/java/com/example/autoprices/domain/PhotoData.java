package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.net.URL;

@Data
@Entity
public class PhotoData implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long Id;
    Integer count;
    URL seoLinkM;
    URL seoLinkSX;
    URL seoLinkB;
    URL seoLinkF;

}
