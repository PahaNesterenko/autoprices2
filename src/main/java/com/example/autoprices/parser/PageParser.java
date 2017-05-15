package com.example.autoprices.parser;

import com.example.autoprices.Selectors;
import com.example.autoprices.domain.Advert;
import lombok.SneakyThrows;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.select.Elements;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class PageParser {

    private AutoParser autoParser;
    private AdvertParser advertParser;

    @SneakyThrows
    public List<Advert> parse(Document doc) {
        autoParser = new AutoParser();
        advertParser = new AdvertParser();



        Elements select = doc.select(Selectors.script);


        int count = 0;
        StringBuilder sb = new StringBuilder();
        for(Element e : select) {

            List<Node> nodes = e.childNodes();
            for (Node node : nodes){
                String nodeText = node.toString().replace("\n", "");
                if(nodeText.contains("window.ria.server.results")) {
                    sb.append(nodeText);
                }
            }

            /*if( e.childNode(0).attributes().get("data").contains("window.ria.server.results")){
                count++;
            }*/

        }

        String s = sb.toString();

        ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
        Object eval = engine.eval("function foo(){ var window={};" + s + " return window.ria.server.results;} foo();");

        Map<Long, Object> map = (Map<Long, Object>) eval;



       /* Gson gson = new GsonBuilder().create();
        ResultType p = gson.fromJson( eval, ResultType.class);
        System.out.println(p);*/


        List<Advert> adverts = new ArrayList<>();
       /* for (Element e : select) {

            Auto auto = autoParser.parse(e);
            Advert advert = advertParser.parse(e);
            advert.setAuto(auto);
            adverts.add(advert);
        }*/

        return adverts;

    }

}
