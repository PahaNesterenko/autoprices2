package com.example.autoprices.parser;

import com.example.autoprices.Constants;
import com.example.autoprices.Selectors;
import com.example.autoprices.domain.Advert;
import com.example.autoprices.domain.Auto;
import com.example.autoprices.domain.FuelType;
import com.example.autoprices.domain.Transmission;
import javaslang.control.Try;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.time.Year;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static java.lang.Long.parseLong;

public class PageParser {

    private AutoParser autoParser;
    private AdvertParser advertParser;

    public List<Advert> parse(Document doc) {
        autoParser = new AutoParser();
        advertParser = new AdvertParser();
        Elements select = doc.select(Selectors.adsection);

        List<Advert> adverts = new ArrayList<>();
        for (Element e : select) {

            Auto auto = autoParser.parse(e);
            Advert advert = advertParser.parse(e);
            advert.setAuto(auto);
            adverts.add(advert);
        }

        return adverts;

    }

}
