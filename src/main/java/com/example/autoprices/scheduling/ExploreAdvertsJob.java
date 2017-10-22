package com.example.autoprices.scheduling;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.parser.PageParser;
import com.example.autoprices.persistance.AutoDataRepository;
import com.example.autoprices.process.AdvertProcess;
import com.example.autoprices.scheduling.domain.ExploreState;
import com.example.autoprices.scheduling.persistance.ExploreStateRepository;
import lombok.SneakyThrows;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Component
public class ExploreAdvertsJob {

    private static final Logger log = LoggerFactory.getLogger(ExploreAdvertsJob.class);

    @Value("${explore.job.riaUrl}")
    private String riaURL;

    @Autowired
    private AdvertProcess advertProcess;

    @Autowired
    private ExploreStateRepository exploreStateRepository;

    @Autowired
    private AutoDataRepository autoDataRepository;

    @Autowired
    private PageParser pageParser;

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    @Scheduled(fixedRate = 20000) //fixedRate = 5000  cron="0 08 * * * *"
    @SneakyThrows
    public void reportCurrentTime() {
        log.info("Start exploring job - ", dateFormat.format(new Date()));

        ExploreState lastStatus = exploreStateRepository.findFirstByOrderByIdDesc();

        Long currentPage = lastStatus == null? 1 : (lastStatus.getPageNumber() + 1);


        Document doc = Jsoup.connect( riaURL + currentPage).get();


        List<Advert> parsed = pageParser.parse(doc);

        advertProcess.save(parsed);

        exploreStateRepository.save(new ExploreState(currentPage));

        log.info("End exploring job - ", dateFormat.format(new Date()));
//TODO save to job status some info number of adverts, was it successful...

    }

}
