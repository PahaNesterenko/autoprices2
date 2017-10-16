package com.example.autoprices.persistance;

import com.example.autoprices.domain.AutoData;
import org.springframework.data.repository.CrudRepository;

public interface AutoDataRepository extends CrudRepository<AutoData, Long> {

}
