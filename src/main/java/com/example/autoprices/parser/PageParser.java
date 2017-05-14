package com.example.autoprices.parser;

import com.example.autoprices.Selectors;
import com.example.autoprices.domain.Advert;
import com.example.autoprices.domain.Auto;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.select.Elements;

import java.util.ArrayList;
import java.util.List;

public class PageParser {

    private AutoParser autoParser;
    private AdvertParser advertParser;

    public List<Advert> parse(Document doc) {
        autoParser = new AutoParser();
        advertParser = new AdvertParser();



        Elements select = doc.select(Selectors.script);


        Elements script = doc.select("script");
        int count = 0;
        StringBuilder sb = new StringBuilder();
        for(Element e : script) {

            List<Node> nodes = e.childNodes();
            for (Node node : nodes){
                String nodeText = node.toString().replace("\n", "");
                sb.append(nodeText);
            }

            /*if( e.childNode(0).attributes().get("data").contains("window.ria.server.results")){
                count++;
            }*/

        }

        String s = sb.toString();


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
