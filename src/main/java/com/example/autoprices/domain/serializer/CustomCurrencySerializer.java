package com.example.autoprices.domain.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import lombok.SneakyThrows;

public class CustomCurrencySerializer extends StdSerializer<Long>
{
  public CustomCurrencySerializer() {
    this(null);
  }

  public CustomCurrencySerializer(Class<Long> t) {
    super(t);
  }

  @Override
  @SneakyThrows
  public void serialize(
      Long value,
      JsonGenerator gen,
      SerializerProvider arg2)
  {
    gen.writeString(value.toString());
  }

}
