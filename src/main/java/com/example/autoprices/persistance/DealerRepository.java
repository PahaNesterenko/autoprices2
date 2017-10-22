package com.example.autoprices.persistance;

import com.example.autoprices.domain.Dealer;
import org.springframework.data.repository.CrudRepository;

public interface DealerRepository extends CrudRepository<Dealer, Long> {

    Dealer getByLink(String link);
    Dealer getByName(String name);

}
