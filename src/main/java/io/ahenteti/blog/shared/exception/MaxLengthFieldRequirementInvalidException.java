package io.ahenteti.blog.shared.exception;

public class MaxLengthFieldRequirementInvalidException extends InvalidRequirementException {

    public MaxLengthFieldRequirementInvalidException(String fieldName, Integer currentLength, Integer maxLength) {
        super(fieldName + " length is greater than the authorized max length. Current length: " + currentLength + ", maxLength: " + maxLength);
    }
}
