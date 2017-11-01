package com.example.autoprices.process;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.domain.Mark;
import com.example.autoprices.domain.Model;
import com.example.autoprices.persistance.AdvertRepository;
import com.example.autoprices.persistance.MarkRepository;
import com.example.autoprices.persistance.ModelRepository;
import com.example.autoprices.process.savers.Saver;
import com.example.autoprices.scheduling.domain.ExploreResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdvertProcess {

    @Autowired
    private AdvertRepository advertRepository;

    @Autowired
    private MarkRepository markRepository;

    @Autowired
    private List<? extends Saver> savers;

    @Autowired
    private ModelRepository modelRepository;

    public Iterable<Advert> processAdverts(List<Advert> adverts, ExploreResult currentStatus){

        processStatus(adverts, currentStatus);

        return adverts.stream().peek(this::saveAdvert).collect(Collectors.toList());
    }

    private void processStatus(List<Advert> adverts, ExploreResult currentStatus) {
        currentStatus.setAdvertCount(adverts.size());
    }

    private Advert saveAdvert(Advert advert) {

        savers.forEach(saver -> saver.save(advert));

        return advertRepository.save(advert);



    }

}
