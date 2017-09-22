package com.example.autoprices.domain.deserializer;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.google.common.collect.Lists;
import lombok.SneakyThrows;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateUtils;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;
import java.util.List;

public class CustomLocalDateTimeDeserializer extends StdDeserializer<LocalDateTime>
{

  private List<String> formatters = Lists.newArrayList("yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd");

  public CustomLocalDateTimeDeserializer() {
    this(null);
  }

  public CustomLocalDateTimeDeserializer(Class<?> vc) {
    super(vc);
  }

  @Override
  @SneakyThrows
  public LocalDateTime deserialize(JsonParser jsonparser, DeserializationContext context)
      throws IOException
  {
    String date = jsonparser.getText();
    if(StringUtils.isBlank(date)){
      return null;
    }
    Date parseDate = DateUtils.parseDate(date, "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd", "dd.MM.yyyy");
    LocalDateTime localDateTime = LocalDateTime.ofInstant(parseDate.toInstant(), ZoneOffset.ofHours(3));
    return localDateTime;
  }
}
