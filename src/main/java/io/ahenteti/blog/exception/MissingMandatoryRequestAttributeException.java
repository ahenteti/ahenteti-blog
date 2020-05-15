package io.ahenteti.blog.exception;

public class MissingMandatoryRequestAttributeException extends InvalidRequestAttributeException {

    public MissingMandatoryRequestAttributeException(String message) {
        super(message);
    }
}
