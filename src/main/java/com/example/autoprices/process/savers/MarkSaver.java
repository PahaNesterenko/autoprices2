package com.example.autoprices.process.savers;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.domain.Mark;
import com.example.autoprices.persistance.MarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarkSaver implements Saver {

    @Autowired
    private MarkRepository markRepository;

    @Override
    public Advert save(Advert advert) {
        if(markRepository.getByName(advert.getMarkName()) != null) {
            markRepository.save(new Mark(advert.getMarkId(), advert.getMarkName()));
        }

        return advert;
    }
}

