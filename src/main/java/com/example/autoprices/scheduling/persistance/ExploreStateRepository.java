package com.example.autoprices.scheduling.persistance;

import com.example.autoprices.scheduling.domain.ExploreResult;
import org.springframework.data.repository.CrudRepository;

public interface ExploreStateRepository extends CrudRepository<ExploreResult, Long> {

    ExploreResult findFirstByRandomFalseOrderByIdDesc();

}
