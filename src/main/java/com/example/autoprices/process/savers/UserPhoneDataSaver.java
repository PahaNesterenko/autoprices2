package com.example.autoprices.process.savers;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.domain.UserPhoneData;
import com.example.autoprices.persistance.UserPhoneDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserPhoneDataSaver implements Saver {

    @Autowired
    private UserPhoneDataRepository userPhoneDataRepository;

    @Override
    public Advert save(Advert advert) {

        UserPhoneData data = advert.getUserPhoneData();
        UserPhoneData stored = userPhoneDataRepository.findByPhoneId(data.getPhoneId());
        if(stored == null){
            userPhoneDataRepository.save(data);
        }else{
            advert.setUserPhoneData(stored);
        }

        return advert;
    }
}
