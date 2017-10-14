package com.example.autoprices.persistance;

import com.example.autoprices.domain.Advert;
import org.springframework.data.repository.CrudRepository;

public interface AdvertRepository extends CrudRepository<Advert, Long> {

}
