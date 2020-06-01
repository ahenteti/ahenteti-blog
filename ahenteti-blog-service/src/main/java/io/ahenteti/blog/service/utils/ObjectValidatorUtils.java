package io.ahenteti.blog.service.utils;


import io.ahenteti.blog.core.exception.MandatoryFieldRequirementInvalidException;

public class ObjectValidatorUtils {

    public static void validateNotNull(String fieldName, Object fieldValue) {
        if (fieldValue == null) {
            throw new MandatoryFieldRequirementInvalidException(fieldName);
        }
    }

}
