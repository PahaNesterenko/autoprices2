package com.example.autoprices.persistance;

import com.example.autoprices.domain.Model;
import org.springframework.data.repository.CrudRepository;

public interface ModelRepository extends CrudRepository<Model, Long> {

    Model getByName(String name);

}
