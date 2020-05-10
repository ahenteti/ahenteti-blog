package io.ahenteti.blog.exception;

public class MissingMandatoryRequestAttributeException extends RuntimeException {

    public MissingMandatoryRequestAttributeException(String message) {
        super(message);
    }
}
