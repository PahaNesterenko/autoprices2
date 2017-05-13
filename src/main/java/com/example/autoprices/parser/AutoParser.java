package com.example.autoprices.parser;

import com.example.autoprices.Constants;
import com.example.autoprices.Selectors;
import com.example.autoprices.domain.Auto;
import com.example.autoprices.domain.FuelType;
import com.example.autoprices.domain.Transmission;
import javaslang.control.Try;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.time.Year;
import java.util.Arrays;
import java.util.List;

import static java.lang.Long.parseLong;

public class AutoParser {

    private List<String> producers = Arrays.asList(Constants.autoProducers.split("\n"));

    public Auto parse(Element element) {

        Auto auto = new Auto();
        try {
            auto.setModel(getModel(element));
            auto.setMake(getMake(element));
            auto.setYear(getYear(element));
            auto.setLocation(element.select(Selectors.location).get(0).child(1).text());
            auto.setPrice(getPrice(element));
            auto.setMileage(getMileage(element));
            auto.setFuelType(getFuelType(element));
            auto.setEngineCapacity(getEngineCapacity(element));
            auto.setTransmission(getTransmission(element));

            String additions = element.select(Selectors.dataState).text();
            if (StringUtils.isNotBlank(additions)) {
                if (additions.contains("Нерастаможен")) {
                    auto.setCustomRegistered(false);
                }
                if (additions.contains("Авто не в Украине")) {
                    auto.setLocatedInUkraine(false);
                }
                if (additions.contains("После ДТП")) {
                    auto.setAccidentFree(false);
                }

            }
        } catch (Exception ex) {
            System.out.println(ex);
        }
        return auto;

    }

    private Transmission getTransmission(Element element) {
        String transmissionValue = element.select(Selectors.transmission).parents().get(0).text().trim();
        Transmission transmission = null;
        if (transmissionValue.contains("Автомат")) {
            transmission = Transmission.AUTOMATIC;
        } else if (transmissionValue.contains("Ручная / Механика")) {
            transmission = Transmission.MANUAL;
        } else if (transmissionValue.contains("Вариатор")) {
            transmission = Transmission.VARIATOR;
        }
        return transmission;
    }

    private Double getEngineCapacity(Element element) {
        String engine = element.select(Selectors.fuelType).parents().get(0).text().trim();
        String[] enginearr = engine.split(", ");
            String engineCapacityVal = Try.of(() -> enginearr[1].split(" ")[0]).getOrElse("0");
           return Double.parseDouble(engineCapacityVal);
    }

    private FuelType getFuelType(Element element) {
        String engine = element.select(Selectors.fuelType).parents().get(0).text().trim();
        FuelType fuelType = null;
        if (!"Не указано".equals(engine)) {
            if (engine.contains("Газ/бензин")) {
                fuelType = FuelType.GASPETROL;
            } else if (engine.contains("Бензин")) {
                fuelType = FuelType.PETROL;
            } else if (engine.contains("Дизель")) {
                fuelType = FuelType.DIESEL;
            } else if (engine.contains("Электро")) {
                fuelType = FuelType.ELECTRIC;
            }
        }
        return fuelType;
    }

    private Long getMileage(Element element) {
        String mileageVal = element.select(Selectors.mileage).parents().get(0).text().split(" ")[0] + "000";
        Long mileage = Try.of(() -> parseLong(mileageVal)).getOrElse(0L);
        return mileage;
    }

    private Long getPrice(Element element) {
        String priceVal = element.select(Selectors.price).text().trim().replace(" ", "");
        Long price = Try.of(() -> parseLong(priceVal)).getOrElse(0L);
        return price;
    }

    private Year getYear(Element element) {
        String makeAndYear = element.select(Selectors.yearAndMake).text();
        String year = makeAndYear.split(" ")[makeAndYear.split(" ").length-1];
        return Year.of(Integer.parseInt(year));
    }

    private String getMake(Element element) {
        String modelandmark = element.select(Selectors.make).text();
        String[] modelandmarksplit = modelandmark.split(" ");
        String producer = "";
        if (modelandmarksplit.length >= 2) {
            if (producers.contains(modelandmarksplit[0])) {
                producer = modelandmarksplit[0];
            } else if (producers.contains(modelandmarksplit[0] + " " + modelandmarksplit[1])) {
                producer = modelandmarksplit[0] + " " + modelandmarksplit[1];
            }
        }
        return producer;
    }

    private String getModel(Element element) {
        String modelandmark = element.select(Selectors.make).text();
        String[] modelandmarksplit = modelandmark.split(" ");
        String model = "";

        for(String producer:producers){
            if(modelandmark.contains(producer)){
                model = modelandmark.replaceAll(producer, "").trim();
            }
        }

        return model;
    }
}
