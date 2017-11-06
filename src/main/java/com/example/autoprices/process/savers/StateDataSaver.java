package com.example.autoprices.process.savers;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.domain.StateData;
import com.example.autoprices.persistance.StateDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StateDataSaver implements Saver {

    @Autowired
    private StateDataRepository stateDataRepository;

    @Override
    public Advert save(Advert advert) {

        StateData stateData = advert.getStateData();
        StateData stored = stateDataRepository.findByCityId(stateData.getCityId());
        /*if(stored != null){
            advert.setStateData(stored);
        }*/
        if(stored == null){
            stateDataRepository.save(stateData);
        }else{
            advert.setStateData(stored);
        }

        return advert;
    }
}
