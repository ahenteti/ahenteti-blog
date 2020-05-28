package io.ahenteti.blog.shared.utils;

import io.ahenteti.blog.shared.exception.MandatoryFieldRequirementInvalidException;

public class ObjectValidatorUtils {

    public static void validateNotNull(String fieldName, Object fieldValue) {
        if (fieldValue == null) {
            throw new MandatoryFieldRequirementInvalidException(fieldName);
        }
    }

}
