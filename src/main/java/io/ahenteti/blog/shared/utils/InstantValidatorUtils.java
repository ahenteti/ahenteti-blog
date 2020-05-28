package io.ahenteti.blog.shared.utils;

import io.ahenteti.blog.shared.exception.InvalidRequirementException;

import java.time.Instant;

public class InstantValidatorUtils {

    public static void validateInThePast(String fieldName, Instant fieldValue) {
        if (fieldValue.isAfter(Instant.now())) {
            throw new InvalidRequirementException(fieldName + " must be in the past");
        }
    }

}
