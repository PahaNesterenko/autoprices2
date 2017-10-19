package com.example.autoprices.process.savers;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.domain.Model;
import com.example.autoprices.persistance.ModelRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ModelSaver implements Saver {

    @Autowired
    private ModelRepository modelRepository;

    @Override
    public Advert save(Advert advert) {
        if (modelRepository.getByName(advert.getModelName()) != null) {
            modelRepository.save(new Model(advert.getModelId(), advert.getModelName()));
        }

        return advert;
    }
}
