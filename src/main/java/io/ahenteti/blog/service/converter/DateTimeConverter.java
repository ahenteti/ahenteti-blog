package io.ahenteti.blog.service.converter;

import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class DateTimeConverter {
    public String toIso8601(ZonedDateTime date) {
        return date.format(DateTimeFormatter.ISO_INSTANT);
    }
}
