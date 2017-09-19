package com.example.autoprices.domain.deserializer;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

public class CustomLocalDateTimeDeserializer extends StdDeserializer<LocalDateTime>
{

  private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

  public CustomLocalDateTimeDeserializer() {
    this(null);
  }

  public CustomLocalDateTimeDeserializer(Class<?> vc) {
    super(vc);
  }

  @Override
  public LocalDateTime deserialize(JsonParser jsonparser, DeserializationContext context)
      throws IOException, JsonProcessingException
  {
    String date = jsonparser.getText();
    return LocalDateTime.parse(date, formatter);
  }
}
