package com.example.autoprices.persistance;

import com.example.autoprices.domain.Auto;
import org.springframework.data.repository.CrudRepository;

public interface AutoRepository extends CrudRepository<Auto, Long>{
}
