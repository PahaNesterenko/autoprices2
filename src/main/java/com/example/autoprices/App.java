package test2;

import lombok.SneakyThrows;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import test2.domain.Auto;
import test2.parser.PageParser;

import java.util.ArrayList;
import java.util.List;

/**
 * Hello world!
 *
 */
public class App 
{

    private Integer maxPageCount = 3;

    public static void main( String[] args )
    {
        App a = new App();
        a.doSomething();
    }

    @SneakyThrows
    private void doSomething() {

        PageParser pp = new PageParser();
        List<Auto> ao = new ArrayList<>();
        for (int i = 0 ; i < maxPageCount; ++i) {


            Document doc = Jsoup.connect("https://auto.ria.com/legkovie/?page=" + i).get();


           ao.addAll( pp.parse(doc));
        }

        System.out.println("done");

    }
}
