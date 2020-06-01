package io.ahenteti.blog.core.exception;

public class InvalidRequirementException extends RuntimeException {

    public InvalidRequirementException(String message) {
        super(message);
    }

    public InvalidRequirementException(String message, Exception cause) {
        super(message, cause);
    }
}
