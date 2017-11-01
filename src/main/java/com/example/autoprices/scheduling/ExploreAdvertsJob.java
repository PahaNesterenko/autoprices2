package com.example.autoprices.scheduling;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.parser.PageParser;
import com.example.autoprices.persistance.AutoDataRepository;
import com.example.autoprices.process.AdvertProcess;
import com.example.autoprices.scheduling.domain.ExploreResult;
import com.example.autoprices.scheduling.persistance.ExploreStateRepository;
import lombok.SneakyThrows;
import org.apache.commons.lang3.RandomUtils;
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
import java.util.Optional;

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

    ExploreResult currentStatus = new ExploreResult();

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    @Scheduled(fixedRate = 20000) //fixedRate = 5000  cron="0 08 * * * *"
    @SneakyThrows
    public void explore() {
        log.info("Start exploring job - ", dateFormat.format(new Date()));
        try {
            Document doc = Jsoup.connect(riaURL + getPageNumberToProcess()).get();
            List<Advert> parsed = pageParser.parse(doc);
            advertProcess.processAdverts(parsed, currentStatus);
        } catch (Exception e) {
            currentStatus.setSuccessful(false);
           // currentStatus.setErrorReason(e.getLocalizedMessage());
        }

        exploreStateRepository.save(currentStatus);

        log.info("End exploring job - ", dateFormat.format(new Date()));
    }

    private Long getPageNumberToProcess() {
        ExploreResult lastStatus = exploreStateRepository.findFirstByOrderByIdDesc();
        if (lastStatus != null) {
            currentStatus.setPreviousPageNumber(lastStatus.getPageNumber());
        } else {
            currentStatus.setPreviousPageNumber(1L);
        }
        return Optional.ofNullable(lastStatus).map(this::calculateNextPageNumber).orElse(1L);
    }

    private Long calculateNextPageNumber(ExploreResult lastResult) {
        // Every third page number will be random
        Long number;
        if (lastResult.getId() % 3 == 0) {
            currentStatus.setRandom(true);
            number = RandomUtils.nextLong(0, 100);
        } else if (lastResult.getRandom()) {
            number = lastResult.getPreviousPageNumber();
        } else {
            number = lastResult.getId() + 1;
        }
        currentStatus.setPageNumber(number);
        return number;
    }

}
