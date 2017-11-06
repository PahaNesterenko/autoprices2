package com.example.autoprices.persistance;

import com.example.autoprices.domain.UserPhoneData;
import org.springframework.data.repository.CrudRepository;

public interface UserPhoneDataRepository extends CrudRepository<UserPhoneData, Long> {

    UserPhoneData findByPhoneId(Long cityId);

}
