package com.example.autoprices.parser;

import com.example.autoprices.Selectors;
import com.example.autoprices.domain.Advert;
import org.jsoup.nodes.Element;

public class AdvertParser {
    public Advert parse(Element element) {

        Advert advert = new Advert();

        advert.setId(Long.parseLong(element.select(Selectors.advertId).text()));

        return advert;
    }
}
