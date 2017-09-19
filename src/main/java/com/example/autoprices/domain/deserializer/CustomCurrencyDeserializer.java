package com.example.autoprices.domain.deserializer;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import lombok.SneakyThrows;

public class CustomCurrencyDeserializer extends StdDeserializer<Long>
{
  public CustomCurrencyDeserializer() {
    this(null);
  }

  public CustomCurrencyDeserializer(Class<?> vc) {
    super(vc);
  }

  @Override
  @SneakyThrows
  public Long deserialize(JsonParser jsonparser, DeserializationContext context)
  {
    String value = jsonparser.getText();
    return Long.parseLong(value);
  }

}
