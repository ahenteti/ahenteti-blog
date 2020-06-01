package io.ahenteti.blog.service.utils;

import io.ahenteti.blog.core.exception.InvalidRequirementException;

import java.time.Instant;

public class InstantValidatorUtils {

    public static void validateInThePast(String fieldName, Instant fieldValue) {
        if (fieldValue.isAfter(Instant.now())) {
            throw new InvalidRequirementException(fieldName + " must be in the past");
        }
    }

}
