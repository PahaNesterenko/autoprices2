package com.example.autoprices.process.savers;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.domain.CheckedVin;
import org.springframework.stereotype.Service;

@Service
public class CheckedVinSaver implements Saver {

    @Override
    public Advert save(Advert advert) {

        CheckedVin check = advert.getCheckedVin();
        if (!check.getIsChecked()) {
            advert.setCheckedVin(null);
        }

        return advert;
    }
}
