package com.example.autoprices.domain.deserializer;

import com.example.autoprices.domain.Engine;
import com.example.autoprices.domain.FuelType;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import javaslang.control.Try;

import java.io.IOException;

public class EngineDeserializer extends StdDeserializer<Engine> {


    protected EngineDeserializer(Class<?> vc) {
        super(vc);
    }
    public EngineDeserializer() {
        this(null);
    }

    @Override
    public Engine deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        String value = jsonParser.getText();

        Engine engine = new Engine();
        FuelType fuelType = null;
        if (!"Не указано".equals(value)) {
            if (value.contains("Газ/бензин")) {
                fuelType = FuelType.GASPETROL;
            } else if (value.contains("Бензин")) {
                fuelType = FuelType.PETROL;
            } else if (value.contains("Дизель")) {
                fuelType = FuelType.DIESEL;
            } else if (value.contains("Электро")) {
                fuelType = FuelType.ELECTRIC;
            }
        }
        engine.setFuelType(fuelType);
        String engineVolume = Try.of(() -> value.split(", ")[1].split(" ")[0]).getOrElse("0");
        double volume = Double.parseDouble(engineVolume);
        engine.setVolume(volume);
        return engine;
    }
}
