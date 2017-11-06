package com.example.autoprices.persistance;

import com.example.autoprices.domain.StateData;
import org.springframework.data.repository.CrudRepository;

public interface StateDataRepository extends CrudRepository<StateData, Long> {

    StateData findByCityId(Long cityId);

}
