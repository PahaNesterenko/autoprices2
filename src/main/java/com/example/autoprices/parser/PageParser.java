package com.example.autoprices.parser;

import com.example.autoprices.domain.Advert;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.select.Elements;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.sun.org.apache.xalan.internal.templates.Constants.ELEMNAME_SCRIPT_STRING;

public class PageParser {

    @SneakyThrows
    public List<Advert> parse(Document doc) {

        String scripts = extractScripts(doc);

        String jsonString = executeScripts(scripts);

        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, Advert> converted = objectMapper.readValue(jsonString, new TypeReference<Map<String, Advert>>() {});

        List<Advert> ads = converted.entrySet().stream()
                .peek(entry -> entry.getValue().setId(Long.valueOf(entry.getKey())))
                .map(Map.Entry::getValue).collect(Collectors.toList());
        return ads;

    }

    private String executeScripts(String s) throws ScriptException {
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
        return engine.eval("function foo(){ var window={};" + s + " return JSON.stringify(window.ria.server.results);} foo();").toString();
    }

    private String extractScripts(Document doc) {
        Elements select = doc.select(ELEMNAME_SCRIPT_STRING);

        StringBuilder sb = new StringBuilder();
        for (Element e : select) {
            List<Node> nodes = e.childNodes();
            for (Node node : nodes) {
                String nodeText = node.toString().replace("\n", "");
                if (nodeText.contains("window.ria.server.results[")) {
                    sb.append(nodeText);
                }
            }
        }

        return sb.toString();
    }

}
