package com.example.autoprices.scheduling.persistance;

import com.example.autoprices.scheduling.domain.ExploreState;
import org.springframework.data.repository.CrudRepository;

public interface ExploreStateRepository extends CrudRepository<ExploreState, Long> {

    ExploreState findFirstByOrderByIdDesc();

}
