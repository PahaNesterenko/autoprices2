package com.example.autoprices;

import com.example.autoprices.domain.Advert;
import com.example.autoprices.persistance.AdvertRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

import java.io.IOException;
import java.io.InputStream;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(loader=AnnotationConfigContextLoader.class)
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        TransactionalTestExecutionListener.class})
public class AdvertRepositoryTest {

    @Autowired
    private AdvertRepository advertRepository;

    @Test
    public void test1() throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        InputStream resourceAsStream = AdvertRepositoryTest.class.getClassLoader().getResourceAsStream("advert.json");
        Advert advert = objectMapper.readValue(resourceAsStream, Advert.class);


        advertRepository.save(advert);
    }


}
