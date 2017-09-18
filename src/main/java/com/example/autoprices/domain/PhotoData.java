package com.example.autoprices.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.net.URL;

@Data
@Entity
public class PhotoData {

    @Id
    Long Id;
    Integer count;
    URL seoLinkM;
    URL seoLinkSX;
    URL seoLinkB;
    URL seoLinkF;

}
