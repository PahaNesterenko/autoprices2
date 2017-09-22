package com.example.autoprices.domain.deserializer;

import com.example.autoprices.domain.Transmission;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;

public class TransmissionDeserializer extends StdDeserializer<Transmission> {
    protected TransmissionDeserializer(Class<?> vc) {
        super(vc);
    }
    public TransmissionDeserializer() {
        this(null);
    }

    @Override
    public Transmission deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        String transmissionValue = jsonParser.getText();
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
}
