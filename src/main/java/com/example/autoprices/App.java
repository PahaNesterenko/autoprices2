package com.example.autoprices;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.parser.PageParser;
import lombok.SneakyThrows;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.util.ArrayList;
import java.util.List;

/**
 * Hello world!
 *
 */
public class App 
{

    private Integer maxPageCount = 1;

    public static void main( String[] args )
    {
        App a = new App();
        a.doSomething();
    }

    @SneakyThrows
    private void doSomething() {

        PageParser pp = new PageParser();
        List<Advert> ao = new ArrayList<>();

        ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
        engine.eval("print('Hello World!');");

        for (int i = 0 ; i < maxPageCount; ++i) {


            Document doc = Jsoup.connect("https://auto.ria.com/legkovie/?page=" + i).get();


           ao.addAll( pp.parse(doc));
        }

        System.out.println("done");

    }
}
