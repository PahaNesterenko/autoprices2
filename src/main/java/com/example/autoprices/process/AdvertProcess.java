package com.example.autoprices.process;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.domain.Mark;
import com.example.autoprices.domain.Model;
import com.example.autoprices.persistance.AdvertRepository;
import com.example.autoprices.persistance.MarkRepository;
import com.example.autoprices.persistance.ModelRepository;
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
    private ModelRepository modelRepository;

    public Iterable<Advert> save(List<Advert> adverts){

        saveMiscellaneous(adverts);

        return advertRepository.save(adverts);
    }

    private void saveMiscellaneous(List<Advert> adverts) {
        List<Mark> marks = adverts.stream()
                .map(advert -> new Mark(advert.getMarkId(), advert.getMarkName())).distinct().collect(Collectors.toList());

        markRepository.save(marks);

        List<Model> models = adverts.stream()
                .map(advert -> new Model(advert.getModelId(), advert.getModelName())).distinct().collect(Collectors.toList());

        modelRepository.save(models);
    }

}
