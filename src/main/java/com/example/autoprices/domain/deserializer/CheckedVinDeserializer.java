package com.example.autoprices.domain.deserializer;

import com.example.autoprices.domain.CheckedVin;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;

public class CheckedVinDeserializer extends StdDeserializer<CheckedVin> {

    protected CheckedVinDeserializer(Class<?> vc) {
        super(vc);
    }
    public CheckedVinDeserializer() {
        this(null);
    }

    @Override
    public CheckedVin deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        String value = jsonParser.getText();
        ObjectMapper objectMapper = new ObjectMapper();

        CheckedVin checkedVin = objectMapper.readValue(value, CheckedVin.class);
        return checkedVin.getIsChecked()? checkedVin:null;

    }
}
