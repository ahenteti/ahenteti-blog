package io.ahenteti.blog.core.exception;

public class MandatoryFieldRequirementInvalidException extends InvalidRequirementException {

    public MandatoryFieldRequirementInvalidException(String field) {
        super(field + " is mandatory");
    }
}
