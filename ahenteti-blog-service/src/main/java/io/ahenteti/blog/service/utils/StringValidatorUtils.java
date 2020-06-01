package io.ahenteti.blog.service.utils;

import io.ahenteti.blog.core.exception.MandatoryFieldRequirementInvalidException;
import io.ahenteti.blog.core.exception.MaxLengthFieldRequirementInvalidException;
import org.apache.commons.lang3.StringUtils;

public class StringValidatorUtils {

    public static void validateNotBlank(String fieldName, String fieldValue) {
        if (StringUtils.isBlank(fieldValue)) {
            throw new MandatoryFieldRequirementInvalidException(fieldName);
        }
    }

    public static void validateMaxLength(String fieldName, String fieldValue, Integer maxLength) {
        if (StringUtils.length(fieldValue) > maxLength) {
            throw new MaxLengthFieldRequirementInvalidException(fieldName, fieldValue.length(), maxLength);
        }
    }
}
