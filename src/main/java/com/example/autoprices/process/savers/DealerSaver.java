package com.example.autoprices.process.savers;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.domain.Dealer;
import com.example.autoprices.persistance.DealerRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DealerSaver implements Saver {

    @Autowired
    private DealerRepository dealerRepository;

    @Override
    public Advert save(Advert advert) {

        Dealer dealer = advert.getDealer();
        if (dealer.getId() == 0){
            advert.setDealer(null);
        } else if(StringUtils.isBlank(dealer.getName()) ){
            Dealer saved = dealerRepository.findById(dealer.getId());
            if(saved != null){
                advert.setDealer(saved);
            } else {
                advert.setDealer(null);
            }
        } else{
            Dealer saved = dealerRepository.findById(dealer.getId());
            if(saved != null) {
                advert.setDealer(saved);
            }else{
                dealerRepository.save(dealer);
            }
        }

        return advert;
    }
}
