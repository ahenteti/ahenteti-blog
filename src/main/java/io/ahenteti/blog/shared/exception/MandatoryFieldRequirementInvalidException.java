package io.ahenteti.blog.shared.exception;

public class MandatoryFieldRequirementInvalidException extends InvalidRequirementException {

    public MandatoryFieldRequirementInvalidException(String field) {
        super(field + " is mandatory");
    }
}
