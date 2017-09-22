package com.example.autoprices.domain.deserializer;

import com.example.autoprices.domain.OldTop;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;

public class OldTopDeserializer extends StdDeserializer<OldTop> {

    protected OldTopDeserializer(Class<?> vc) {
        super(vc);
    }
    public OldTopDeserializer() {
        this(null);
    }

    @Override
    public OldTop deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        String value = jsonParser.getText();
        ObjectMapper objectMapper = new ObjectMapper();

        OldTop oldTop = objectMapper.readValue(value, OldTop.class);
        return oldTop.getIsActive()? oldTop : null;
    }
}
