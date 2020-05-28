package io.ahenteti.blog.shared.utils;

import io.ahenteti.blog.shared.exception.MandatoryFieldRequirementInvalidException;
import io.ahenteti.blog.shared.exception.MaxLengthFieldRequirementInvalidException;
import org.apache.commons.collections4.CollectionUtils;

import java.util.Collection;

public class CollectionValidatorUtils {

    public static <T> void validateNotEmpty(String fieldName, Collection<T> collection) {
        if (CollectionUtils.isEmpty(collection)) {
            throw new MandatoryFieldRequirementInvalidException(fieldName);
        }
    }

    public static <T> void validateMaxLength(String fieldName, Collection<T> collection, Integer maxLength) {
        if (CollectionUtils.size(collection) > maxLength) {
            throw new MaxLengthFieldRequirementInvalidException(fieldName, CollectionUtils.size(collection), maxLength);
        }
    }

}
